import { ValueObject } from "@/core/entities/value-object";

interface CommentWithAuthorProps {
    commentId: string
    content: string
    authorId: string
    author: string
    createdAt: Date
    updateAt?: Date | null
}

export class CommentWithAuthor extends ValueObject<CommentWithAuthorProps> {
    get commentId () {
        return this.props.commentId
    }

    get content () {
        return this.props.content
    }

    get authorId () {
        return this.props.authorId
    }

    get author () {
        return this.props.author
    }

    get createdAt () {
        return this.props.createdAt
    }

    get updateAt () {
        return this.props.updateAt
    }

    static create(props: CommentWithAuthorProps) {
        return new CommentWithAuthor(props)
    }
}