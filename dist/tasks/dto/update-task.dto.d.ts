import { TaskStatus, TaskPriority } from '../entities/task.entity';
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: TaskStatus;
    priority?: TaskPriority;
    dueDate?: string;
}
