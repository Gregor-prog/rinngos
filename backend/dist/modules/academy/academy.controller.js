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
exports.AcademyController = void 0;
const common_1 = require("@nestjs/common");
const academy_service_1 = require("./academy.service");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const client_1 = require("@prisma/client");
let AcademyController = class AcademyController {
    constructor(academyService) {
        this.academyService = academyService;
    }
    findAllCourses() {
        return this.academyService.findAllCourses();
    }
    enrol(dto) {
        return this.academyService.enrol(dto);
    }
    findAllEnrolments() {
        return this.academyService.findAllEnrolments();
    }
};
exports.AcademyController = AcademyController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('courses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcademyController.prototype, "findAllCourses", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('enrol'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [academy_service_1.EnrolAcademyDto]),
    __metadata("design:returntype", void 0)
], AcademyController.prototype, "enrol", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.Role.SUPER_ADMIN, client_1.Role.SECRETARIAT_ADMIN),
    (0, common_1.Get)('enrolments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcademyController.prototype, "findAllEnrolments", null);
exports.AcademyController = AcademyController = __decorate([
    (0, common_1.Controller)('academy'),
    __metadata("design:paramtypes", [academy_service_1.AcademyService])
], AcademyController);
//# sourceMappingURL=academy.controller.js.map