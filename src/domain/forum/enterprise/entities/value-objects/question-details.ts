import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { ValueObject } from "@/core/entities/value-object";
import { Slug } from "./slug";
import { Attachment } from "../attachment";

interface QuestionsDetailsProps {
    questionId: UniqueEntityID
    authorId: UniqueEntityID
    author: string,
    title: string,
    slug: Slug,
    content: string,
    attachments: Attachment[],
    bestAnswerId?: UniqueEntityID
    createdAt: Date,
    updatedAt?: Date | null
}

export class QuestionsDetails extends ValueObject<QuestionsDetailsProps> {
    get questionId () {
        return this.props.questionId
    }

    get authorId () {
        return this.props.authorId
    }

    get author () {
        return this.props.author
    }

    get title () {
        return this.props.title
    }

    get slug () {
        return this.props.slug
    }

    get content () {
        return this.props.content
    }

    
    get attachments () {
        return this.props.attachments
    }
    
    get bestAnswerId () {
        return this.props.bestAnswerId
    }

    get createdAt () {
        return this.props.createdAt
    }

    get updatedAt () {
        return this.props.updatedAt
    }

    static create(props: QuestionsDetailsProps) {
        return new QuestionsDetails(props)
    }
}