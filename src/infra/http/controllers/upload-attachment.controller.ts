import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('/attachments')
export class UploadAttachment {

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async handle(@UploadedFile(
    new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 2 }), // 2mb
            new FileTypeValidator({ fileType: '.(pnj|jpg|jpeg|pdf' }),
        ],
    }),
  ) 
  file: Express.Multer.File,
) {
    console.log(file)
}
}