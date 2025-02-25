import { Question } from '@/domain/forum/enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Either, left, right } from '@/core/either'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { QuestionAttachmentList } from '@/domain/forum/enterprise/entities/question-attachment-list'
import { Injectable } from '@nestjs/common'
import { Student } from '../../enterprise/entities/student'
import { StudentRepository } from '../repositories/student-repository'
import { HashGeneration } from '../cryptography/hash-generator'
import { StudentAlreadyExistsError } from './errors/student-already-exists-error'

interface RegisterStudentUseCaseRequest {
    name: string,
    email: string
    password: string
}

type RegisterStudentUseCaseResponse = Either<
  StudentAlreadyExistsError,
  {
    student: Student
  }
>

@Injectable()
export class RegisterStudentUseCase {
  constructor(
    private studentsRepository: StudentRepository,
    private hashGenerator: HashGeneration
  ) {}

  async execute({
    name,
    email,
    password
  }: RegisterStudentUseCaseRequest): Promise<RegisterStudentUseCaseResponse> {
    
    const studentWithSameEmail = await this.studentsRepository.findByEmail(email)
  
      if (studentWithSameEmail) {
        return left(new StudentAlreadyExistsError(email))
      }
  
      const hashedPassword = await this.hashGenerator.hash(password)

      const student = Student.create({
        name,
        email,
        password: hashedPassword,
      })

      await this.studentsRepository.create(student)

    return right({
      student,
    })
  }
}
