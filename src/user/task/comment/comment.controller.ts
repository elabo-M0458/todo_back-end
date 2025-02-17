import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CreatedCommentDto } from './dto/create-comment.dto'

@Controller('users/:userId/tasks/:taskId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //コメント追加
  @Post('')
  async create(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
    @Body() createdComemntDto: CreatedCommentDto
  ) {
    return this.commentService.create(userId, taskId, createdComemntDto)
  }

  //コメント追加
  @Delete(':commentId')
  async removeComment(@Param('commentId') commentId: string) {
    return this.commentService.removeComment(commentId)
  }
}
