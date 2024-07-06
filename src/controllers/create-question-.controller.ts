import { Controller, Post, UseGuards, UsePipes } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'


@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  constructor(
  ) {}

 @Post()
  async handle() {
    return 'ok'
  }
}