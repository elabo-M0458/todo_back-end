import { Body, Controller, Post } from '@nestjs/common'
import { LoginService } from './login.service'
import { LoginUserDto } from './dto/login-user.dto'

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async checkLogin(@Body() LoginUserDto: LoginUserDto) {
    return this.loginService.checkLogin(LoginUserDto)
  }
}
