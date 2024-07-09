import { HashComparer } from "@/domain/forum/application/cryptography/hash-comparer";
import { HashGeneration } from "@/domain/forum/application/cryptography/hash-generator";

export class FakeHasher implements HashGeneration, HashComparer {
    async hash(plain: string): Promise<string> {
        return plain.concat('-hashed')
    }

    async compare(plain: string, hash: String): Promise<boolean> {
        return plain.concat('-hashed') === hash
    }
    
}