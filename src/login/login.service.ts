import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { LoginUserDto } from './dto/login-user.dto'

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}
  async isLogin(loginUserDto: LoginUserDto) {
    const isEMail = await this.prisma.user.findUnique({
      where: { eMail: loginUserDto.eMail }
    })

    const isPassword = await this.prisma.user.findFirst({
      where: { password: loginUserDto.password }
    })

    if (isEMail && isPassword) {
      return true
    }
    return false
  }
}
