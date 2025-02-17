import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './user/user.module'
import { LoginModule } from './login/login.module'

import { TaskModule } from './user/task/task.module'
import { CommentModule } from './user/task/comment/comment.module'

@Module({
  imports: [PrismaModule, UserModule, LoginModule, TaskModule, CommentModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
