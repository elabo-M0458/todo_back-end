import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CreatedCommentDto } from './dto/create-comment.dto'

@Controller('users')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //コメント追加
  @Post('/:userId/tasks/:taskId/comments')
  async create(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
    @Body() createdComemntDto: CreatedCommentDto
  ) {
    return this.commentService.create(userId, taskId, createdComemntDto)
  }

  //コメント追加
  @Delete('/:userId/tasks/:taskId/comments/:commentId')
  async removeComment(@Param('commentId') commentId: string) {
    return this.commentService.removeComment(commentId)
  }
}
