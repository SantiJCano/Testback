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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const existingUser = await this.usersService.findOneByEmail(registerDto.email);
        if (existingUser) {
            throw new common_1.ConflictException('El usuario ya existe');
        }
        const user = await this.usersService.create(registerDto);
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto.email, loginDto.password);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
    async validateUser(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (user && await this.usersService.validatePassword(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async getProfile(userId) {
        const user = await this.usersService.findOneById(userId);
        if (!user) {
            throw new common_1.UnauthorizedException('Usuario no encontrado');
        }
        const { password, ...result } = user;
        return result;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map