import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma/prisma.service";
import { PrismaQuestionsAttachmentsRepository } from "./prisma/repositories/prisma-question-attachments-repositiory";
import { PrismaQuestionsRepository } from "./prisma/repositories/prisma-questions-repository";
import { PrismaAnswerAttachmentsRepository } from "./prisma/repositories/prisma-answer-attachments-repository";
import { PrismaQuestionsCommentsRepository } from "./prisma/repositories/prisma-question-comments-repository";
import { PrismaAnswersRepository } from "./prisma/repositories/prisma-answers-repository";
import { PrismaAnswerCommentsRepository } from "./prisma/repositories/prisma-answer-comments-repository";

@Module({
    providers: [
        PrismaService, 
        PrismaQuestionsAttachmentsRepository, 
        PrismaQuestionsRepository, 
        PrismaAnswerAttachmentsRepository, 
        PrismaQuestionsCommentsRepository, 
        PrismaAnswersRepository, 
        PrismaAnswerCommentsRepository
    ],
    exports: [
        PrismaService,
        PrismaQuestionsAttachmentsRepository, 
        PrismaQuestionsRepository, 
        PrismaAnswerAttachmentsRepository, 
        PrismaQuestionsCommentsRepository, 
        PrismaAnswersRepository, 
        PrismaAnswerCommentsRepository
    ]

})
export class DatabaseModule {}