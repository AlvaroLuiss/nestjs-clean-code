import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionCommentsRepository } from "@/domain/forum/application/repositories/question-comments-repository";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";
import { Injectable } from "@nestjs/common";
import { PrismaQuestionMapper } from "../mappers/prisma-question-mapper";
import { PrismaService } from "../prisma.service";
import { PrismaQuestionCommentMapper } from "../mappers/prisma-question-comment-mapper";
import { CommentWithAuthor } from "@/domain/forum/enterprise/entities/value-objects/comment-with-author";
import { PrismaCommentWithAuthorMapper } from "../mappers/prisma-comment-with-auhtor-mapper";

@Injectable()
export class PrismaQuestionsCommentsRepository implements QuestionCommentsRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string): Promise<QuestionComment | null> {
        const questionComment = await this.prisma.comment.findUnique({
              where: {
                id,
              },
            })
        
            if (!questionComment) {
              return null
            }
        
        return PrismaQuestionCommentMapper.toDomain(questionComment)
    }

    async findManyByQuestionId(questionId: string, { page }: PaginationParams): Promise<QuestionComment[]> {
        const questionsComments = await this.prisma.comment.findMany({
            where: {
                questionId
            },
            orderBy: {
              createdAt: 'desc',
            },
            take: 20,                                                                                                  
            skip: (page - 1) * 20,
          })
      
          return questionsComments.map(PrismaQuestionCommentMapper.toDomain)
    }

    async findManyByQuestionIdWithAuthor(questionId: string, { page }: PaginationParams): Promise<CommentWithAuthor[]> {
      const questionsComments = await this.prisma.comment.findMany({
          where: {
              questionId
          },
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            author: true
          },
          take: 20,                                                                                                  
          skip: (page - 1) * 20,
        })
    
        return questionsComments.map(PrismaCommentWithAuthorMapper.toDomain)
  }

    async create(questionComment: QuestionComment): Promise<void> {
        const data = PrismaQuestionCommentMapper.toPrisma(questionComment)

        await this.prisma.comment.create({
          data,
        })
    }

    async delete(questionComment: QuestionComment): Promise<void> {
        const data = PrismaQuestionCommentMapper.toPrisma(questionComment)

        await this.prisma.comment.delete({
            where: {
                id: questionComment.id.toString(),
            },
        })
    }

}