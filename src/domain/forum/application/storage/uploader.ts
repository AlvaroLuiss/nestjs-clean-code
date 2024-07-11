export interface UploadParams {
    fileName,
    fileType,
    body
}

export abstract class Uploader {
    abstract upload(params: UploadParams): Promise<{ url: string }>
}