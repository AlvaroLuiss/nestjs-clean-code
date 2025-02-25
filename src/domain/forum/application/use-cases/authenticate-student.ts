import { Either, left, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { StudentRepository } from '../repositories/student-repository'
import { HashComparer } from '../cryptography/hash-comparer'
import { Encrypter } from '../cryptography/encrypter'
import { WrongCredentialsError } from './errors/wrong-credentials-error'

interface AuthenticateStudentUseCaseRequest {
    email: string
    password: string,
}

type AuthenticateStudentUseCaseResponse = Either<
    WrongCredentialsError, 
  {
    accessToken: String
  }
>

@Injectable()
export class AuthenticateStudentUseCase {
  constructor(
    private studentsRepository: StudentRepository,
    private hashComparer: HashComparer,
    private encrypter: Encrypter
  ) {}

  async execute({
    email,
    password
  }: AuthenticateStudentUseCaseRequest): Promise<AuthenticateStudentUseCaseResponse> {
    
    const student = await this.studentsRepository.findByEmail(email)
  
      if (!student) {
        return left(new WrongCredentialsError())
      }
  
    const isPasswordValid = await this.hashComparer.compare(
        password, 
        student.password
    )

    if (!isPasswordValid) {
        return left(new WrongCredentialsError())
    }

    const accessToken = await this.encrypter.encrypt({ sub: student.id.toString() })


    return right({
        accessToken,
    })
  }
}
