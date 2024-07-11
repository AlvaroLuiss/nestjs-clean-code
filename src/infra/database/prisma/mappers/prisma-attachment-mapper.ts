import { Attachment } from '@/domain/forum/enterprise/entities/attachment'
import { Attachment as PrismaAttachment, Prisma } from '@prisma/client'



// Quero pegar uma Student do prisma e converter ela para uma Student  de domain.

export class PrismaAttachmentMapper {
    static toPrisma(attachment: Attachment): Prisma.AttachmentUncheckedCreateInput {
        return {
            id: attachment.id.toString(),
            title: attachment.title, 
            url: attachment.url
        }
    }
}