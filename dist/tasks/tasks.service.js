"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
let TasksService = class TasksService {
    tasksRepository;
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async create(createTaskDto, userId) {
        try {
            const taskData = {
                ...createTaskDto,
                user: { id: userId },
                userId,
                status: task_entity_1.TaskStatus.PENDING,
                dueDate: createTaskDto.dueDate ? new Date(createTaskDto.dueDate) : undefined,
            };
            const task = this.tasksRepository.create(taskData);
            console.log('taskData:', taskData);
            return await this.tasksRepository.save(task);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating task: ${error.message}`);
        }
    }
    async findAll(userId) {
        return this.tasksRepository.find({
            where: { userId },
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id, userId) {
        const task = await this.tasksRepository.findOne({
            where: { id, userId },
        });
        if (!task) {
            throw new common_1.NotFoundException('Tarea no encontrada');
        }
        return task;
    }
    async update(id, updateTaskDto, userId) {
        const task = await this.findOne(id, userId);
        Object.assign(task, updateTaskDto);
        if (updateTaskDto.dueDate) {
            task.dueDate = new Date(updateTaskDto.dueDate);
        }
        return this.tasksRepository.save(task);
    }
    async remove(id, userId) {
        const task = await this.findOne(id, userId);
        await this.tasksRepository.remove(task);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map