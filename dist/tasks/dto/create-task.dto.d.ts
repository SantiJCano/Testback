import { TaskPriority } from '../entities/task.entity';
export declare class CreateTaskDto {
    title: string;
    description?: string;
    priority: TaskPriority;
    dueDate?: string;
}
