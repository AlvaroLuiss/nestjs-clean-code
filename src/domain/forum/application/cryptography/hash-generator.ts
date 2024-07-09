export abstract class HashGeneration {
    abstract hash(plain: string): Promise<string>
}