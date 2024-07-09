export abstract class HashComparer {
    abstract compare(plain: string, hash: String): Promise<boolean>
}