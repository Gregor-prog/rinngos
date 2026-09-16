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
exports.ClinicService = exports.CreateClinicKBDto = exports.QueryClinicDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const class_validator_1 = require("class-validator");
class QueryClinicDto {
}
exports.QueryClinicDto = QueryClinicDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QueryClinicDto.prototype, "query", void 0);
class CreateClinicKBDto {
}
exports.CreateClinicKBDto = CreateClinicKBDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateClinicKBDto.prototype, "keywords", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateClinicKBDto.prototype, "answer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClinicKBDto.prototype, "category", void 0);
let ClinicService = class ClinicService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async query(q) {
        const s = q.toLowerCase();
        const allKb = await this.prisma.clinicKB.findMany();
        if (allKb.length === 0) {
            return {
                query: q,
                answer: 'I can help with NGO registration, governance, funding readiness, regulatory policies, self-regulation, safeguarding, Community Development Plans, extractive justice, training, webinars and RINNGOS membership. Please describe the issue in one or two sentences.',
            };
        }
        let best = null;
        let score = 0;
        allKb.forEach((item) => {
            let n = item.keywords.filter((k) => s.includes(k.toLowerCase())).length;
            if (n > score) {
                score = n;
                best = item;
            }
        });
        return {
            query: q,
            answer: best
                ? best.answer
                : 'I can help with NGO registration, governance, funding readiness, regulatory policies, self-regulation, safeguarding, Community Development Plans, extractive justice, training, webinars and RINNGOS membership. Please describe the issue in one or two sentences and include the type of organisation or community involved.',
        };
    }
    async findAllKB() {
        return this.prisma.clinicKB.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async createKB(dto) {
        return this.prisma.clinicKB.create({
            data: dto,
        });
    }
    async updateKB(id, dto) {
        const existing = await this.prisma.clinicKB.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('KB Entry not found');
        return this.prisma.clinicKB.update({
            where: { id },
            data: dto,
        });
    }
    async deleteKB(id) {
        const existing = await this.prisma.clinicKB.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('KB Entry not found');
        return this.prisma.clinicKB.delete({ where: { id } });
    }
};
exports.ClinicService = ClinicService;
exports.ClinicService = ClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClinicService);
//# sourceMappingURL=clinic.service.js.map