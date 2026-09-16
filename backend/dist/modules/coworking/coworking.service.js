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
exports.CoworkingService = exports.CreateCoworkingBookingDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const class_validator_1 = require("class-validator");
class CreateCoworkingBookingDto {
}
exports.CreateCoworkingBookingDto = CreateCoworkingBookingDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCoworkingBookingDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCoworkingBookingDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCoworkingBookingDto.prototype, "date", void 0);
let CoworkingService = class CoworkingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async book(dto) {
        return this.prisma.coworkingBooking.create({
            data: {
                fullName: dto.fullName,
                email: dto.email,
                date: new Date(dto.date),
            },
        });
    }
    async findAll() {
        return this.prisma.coworkingBooking.findMany({
            orderBy: { date: 'asc' },
        });
    }
    async updateStatus(id, status) {
        const existing = await this.prisma.coworkingBooking.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Booking not found');
        return this.prisma.coworkingBooking.update({
            where: { id },
            data: { status },
        });
    }
};
exports.CoworkingService = CoworkingService;
exports.CoworkingService = CoworkingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoworkingService);
//# sourceMappingURL=coworking.service.js.map