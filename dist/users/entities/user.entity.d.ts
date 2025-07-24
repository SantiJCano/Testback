import { Task } from '../../tasks/entities/task.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
}
