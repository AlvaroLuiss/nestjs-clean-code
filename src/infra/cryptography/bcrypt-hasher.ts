import { hash, compare } from 'bcryptjs'
import { HashComparer } from "@/domain/forum/application/cryptography/hash-comparer";
import { HashGeneration } from "@/domain/forum/application/cryptography/hash-generator";

export class BcryptHasher implements HashGeneration, HashComparer {
    hash(plain: string): Promise<string> {
        return hash(plain, 8)
    }

    compare(plain: string, hash: string): Promise<boolean> {
        return compare(plain, hash)
    }
    
}