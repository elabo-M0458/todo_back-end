import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  taskName: string

  @IsString()
  createdBy: string

  @IsString()
  updatedBy: string

  @IsString()
  userId: string
}
