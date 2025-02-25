import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Student } from '@/domain/forum/enterprise/entities/Student'
import { User as PrismaUser, Prisma } from '@prisma/client'



// Quero pegar uma Student do prisma e converter ela para uma Student  de domain.

export class PrismaStudentMapper {
    static toDomain(raw: PrismaUser): Student {
        return Student.create({
            name: raw.name,
            email: raw.email,
            password: raw.password,
        }, new UniqueEntityID(raw.id))
    }

    static toPrisma(student: Student): Prisma.UserUncheckedCreateInput {
        return {
            id: student.id.toString(),
            name: student.name,
            email: student.email,
            password: student.password,
        }
    }
}