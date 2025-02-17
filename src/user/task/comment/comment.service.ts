import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreatedCommentDto } from './dto/create-comment.dto'

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async create(userId: string, taskId: string, createdCommentDto: CreatedCommentDto) {
    const createComment = await this.prisma.comment.create({
      data: {
        commentText: createdCommentDto.commentText,
        createdBy: userId,
        updatedBy: userId,
        taskId: taskId
      }
    })
    return createComment
  }

  async removeComment(commentId: string) {
    await this.prisma.comment.delete({
      where: { id: commentId }
    })
  }
}
