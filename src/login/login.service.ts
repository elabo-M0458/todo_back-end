import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { LoginUserDto } from './dto/login-user.dto'

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}
  async checkLogin(loginUserDto: LoginUserDto) {
    const isLogin = await this.prisma.user.findMany({
      where: { eMail: loginUserDto.eMail, password: loginUserDto.password }
    })
    if (isLogin) {
      return true
    }
    return false
  }
}
