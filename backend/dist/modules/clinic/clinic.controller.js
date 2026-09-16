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
exports.ClinicController = void 0;
const common_1 = require("@nestjs/common");
const clinic_service_1 = require("./clinic.service");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const client_1 = require("@prisma/client");
let ClinicController = class ClinicController {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    query(dto) {
        return this.clinicService.query(dto.query);
    }
    findAllKB() {
        return this.clinicService.findAllKB();
    }
    createKB(dto) {
        return this.clinicService.createKB(dto);
    }
    updateKB(id, dto) {
        return this.clinicService.updateKB(id, dto);
    }
    deleteKB(id) {
        return this.clinicService.deleteKB(id);
    }
};
exports.ClinicController = ClinicController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('query'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinic_service_1.QueryClinicDto]),
    __metadata("design:returntype", void 0)
], ClinicController.prototype, "query", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.Role.SUPER_ADMIN, client_1.Role.SECRETARIAT_ADMIN),
    (0, common_1.Get)('kb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClinicController.prototype, "findAllKB", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.Role.SUPER_ADMIN, client_1.Role.SECRETARIAT_ADMIN),
    (0, common_1.Post)('kb'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinic_service_1.CreateClinicKBDto]),
    __metadata("design:returntype", void 0)
], ClinicController.prototype, "createKB", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.Role.SUPER_ADMIN, client_1.Role.SECRETARIAT_ADMIN),
    (0, common_1.Put)('kb/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClinicController.prototype, "updateKB", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.Role.SUPER_ADMIN, client_1.Role.SECRETARIAT_ADMIN),
    (0, common_1.Delete)('kb/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicController.prototype, "deleteKB", null);
exports.ClinicController = ClinicController = __decorate([
    (0, common_1.Controller)('clinic'),
    __metadata("design:paramtypes", [clinic_service_1.ClinicService])
], ClinicController);
//# sourceMappingURL=clinic.controller.js.map