import { DomainEvents } from '@/core/events/domain-events'
import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachment-repository'
import { StudentRepository } from '@/domain/forum/application/repositories/student-repository'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Student } from '@/domain/forum/enterprise/entities/student'

export class InMemoryAttachmentsRepository implements AttachmentsRepository {
  public items: Attachment[] = []

  async create(attachment: Attachment) {
    this.items.push(attachment)
  }

}
