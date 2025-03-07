import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { TaskService } from './task.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task-dto'

@Controller('users/:userId/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  //タスク登録
  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto, @Param('userId') userId: string) {
    return this.taskService.createTask(createTaskDto, userId)
  }

  //タスク取得
  @Get()
  async findTasks(@Param('userId') userId: string) {
    return this.taskService.findTasks(userId)
  }

  //タスク編集
  @Patch(':taskId')
  async updateTask(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    return this.taskService.updateTask(userId, taskId, updateTaskDto)
  }

  //タスク削除
  @Delete(':taskId')
  async removeTask(@Param('taskId') taskId: string) {
    return this.taskService.removeTask(taskId)
  }
}
