import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        access_token: string;
        user: import("../users/entities/user.entity").User;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: any;
    }>;
    validateUser(email: string, password: string): Promise<any>;
    getProfile(userId: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        isActive: boolean;
        tasks: import("../tasks/entities/task.entity").Task[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
