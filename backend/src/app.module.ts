import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_GUARD } from '@nestjs/core';

import configuration from './config/configuration';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { MembershipsModule } from './modules/memberships/memberships.module';
import { ClinicModule } from './modules/clinic/clinic.module';
import { EventsModule } from './modules/events/events.module';
import { CoworkingModule } from './modules/coworking/coworking.module';
import { AcademyModule } from './modules/academy/academy.module';
import { ResourcesModule } from './modules/resources/resources.module';
import { PartnershipsModule } from './modules/partnerships/partnerships.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { ContactModule } from './modules/contact/contact.module';

import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 600, // 10 minutes cache TTL
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          ttl: config.get<number>('throttler.ttl')! * 1000,
          limit: config.get<number>('throttler.limit')!,
        },
      ],
    }),
    PrismaModule,
    AuthModule,
    MembershipsModule,
    ClinicModule,
    EventsModule,
    CoworkingModule,
    AcademyModule,
    ResourcesModule,
    PartnershipsModule,
    FeedbackModule,
    ContactModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
