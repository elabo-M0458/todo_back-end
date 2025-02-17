import { IsNotEmpty, IsString } from 'class-validator'

export class CreatedCommentDto {
  @IsNotEmpty()
  @IsString()
  commentText: string
}
