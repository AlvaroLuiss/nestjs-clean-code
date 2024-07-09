import { Encrypter } from "@/domain/forum/application/cryptography/encrypter";
import { Module } from "@nestjs/common";
import { JwtEncrypter } from "./jwt-encrypter";
import { HashComparer } from "@/domain/forum/application/cryptography/hash-comparer";
import { BcryptHasher } from "./bcrypt-hasher";
import { HashGeneration } from "@/domain/forum/application/cryptography/hash-generator";

@Module({
    providers: [
        { provide: Encrypter, useClass: JwtEncrypter },
        { provide: HashComparer, useClass: BcryptHasher },
        { provide: HashGeneration, useClass: BcryptHasher },
    ],
    exports: [
        Encrypter,
        HashComparer,
        HashGeneration
    ]
})
export class CryptographyModule {
    
}