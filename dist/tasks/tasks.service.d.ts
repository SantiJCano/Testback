import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private readonly tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto, userId: string): Promise<Task>;
    findAll(userId: string): Promise<Task[]>;
    findOne(id: string, userId: string): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto, userId: string): Promise<Task>;
    remove(id: string, userId: string): Promise<void>;
}
