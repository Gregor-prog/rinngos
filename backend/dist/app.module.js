"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const cache_manager_1 = require("@nestjs/cache-manager");
const core_1 = require("@nestjs/core");
const configuration_1 = require("./config/configuration");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const auth_module_1 = require("./modules/auth/auth.module");
const memberships_module_1 = require("./modules/memberships/memberships.module");
const clinic_module_1 = require("./modules/clinic/clinic.module");
const events_module_1 = require("./modules/events/events.module");
const coworking_module_1 = require("./modules/coworking/coworking.module");
const academy_module_1 = require("./modules/academy/academy.module");
const resources_module_1 = require("./modules/resources/resources.module");
const partnerships_module_1 = require("./modules/partnerships/partnerships.module");
const feedback_module_1 = require("./modules/feedback/feedback.module");
const contact_module_1 = require("./modules/contact/contact.module");
const jwt_auth_guard_1 = require("./common/guards/jwt-auth.guard");
const roles_guard_1 = require("./common/guards/roles.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            cache_manager_1.CacheModule.register({
                isGlobal: true,
                ttl: 600,
            }),
            throttler_1.ThrottlerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => [
                    {
                        ttl: config.get('throttler.ttl') * 1000,
                        limit: config.get('throttler.limit'),
                    },
                ],
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            memberships_module_1.MembershipsModule,
            clinic_module_1.ClinicModule,
            events_module_1.EventsModule,
            coworking_module_1.CoworkingModule,
            academy_module_1.AcademyModule,
            resources_module_1.ResourcesModule,
            partnerships_module_1.PartnershipsModule,
            feedback_module_1.FeedbackModule,
            contact_module_1.ContactModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map