import { Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task-dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async createTask(createTaskDto: CreateTaskDto, id: string) {
    const newTask = await this.prisma.task.create({
      data: {
        taskName: createTaskDto.taskName,
        createdBy: id,
        updatedBy: id,
        userId: id
      }
    })
    return newTask
  }

  async findTasks(userId: string) {
    return await this.prisma.task.findMany({
      where: { userId: userId }
    })
  }

  async updateTask(userId: string, taskId: string, updateTaskDto: UpdateTaskDto) {
    const updatedTask = await this.prisma.task.update({
      where: { id: taskId },
      data: {
        taskName: updateTaskDto.taskName,
        updatedBy: userId
      }
    })
    return updatedTask
  }
  async removeTask(userId: string, taskId: string) {
    await this.prisma.task.delete({
      where: { id: taskId }
    })
  }
}
