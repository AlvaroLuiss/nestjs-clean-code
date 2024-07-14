import { QuestionsDetails } from "@/domain/forum/enterprise/entities/value-objects/question-details";
import { AttachmentPresenter } from "./attachment-presenter";

export class QuestionDetailsPresenter {
    static toHTTP(questionDetails: QuestionsDetails) {
        return {
            questionId: questionDetails.questionId.toString(),
            authorId: questionDetails.authorId.toString(),
            author: questionDetails.author,
            title: questionDetails.title,
            content: questionDetails.content,
            slug: questionDetails.slug.value,
            bestAnswerId: questionDetails.bestAnswerId?.toString(),
            attachments: questionDetails.attachments.map(AttachmentPresenter.toHTTP),
            createdAt: questionDetails.createdAt,
            updatedAt: questionDetails.updatedAt,
        }
    }
}