import { IsString } from 'class-validator'

export class UpdateTaskDto {
  @IsString()
  taskName: string
}
