import { Injectable, NotFoundException, ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Task, TaskStatus } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto, userId: string): Promise<Task> {
    try {
      const taskData: DeepPartial<Task> = {
        ...createTaskDto,
        user: { id: userId },
        userId,
        status: TaskStatus.PENDING,
        dueDate: createTaskDto.dueDate ? new Date(createTaskDto.dueDate) : undefined,
      };

      const task = this.tasksRepository.create(taskData);
      console.log('taskData:', taskData);
      return await this.tasksRepository.save(task);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating task: ${error.message}`);
    }
  }

  async findAll(userId: string): Promise<Task[]> {
    return this.tasksRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string, userId: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: { id, userId },
    });

    if (!task) {
      throw new NotFoundException('Tarea no encontrada');
    }

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto, userId: string): Promise<Task> {
    const task = await this.findOne(id, userId);

    // Actualizar los campos
    Object.assign(task, updateTaskDto);
    
    if (updateTaskDto.dueDate) {
      task.dueDate = new Date(updateTaskDto.dueDate);
    }

    return this.tasksRepository.save(task);
  }

  async remove(id: string, userId: string): Promise<void> {
    const task = await this.findOne(id, userId);
    await this.tasksRepository.remove(task);
  }
}