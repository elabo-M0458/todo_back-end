import { IsNotEmpty, IsString } from 'class-validator'

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  eMail: string

  @IsNotEmpty()
  @IsString()
  password: string
}
