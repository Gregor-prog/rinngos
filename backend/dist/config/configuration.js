"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT || '4000', 10),
    database: {
        url: process.env.DATABASE_URL,
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
        password: process.env.REDIS_PASSWORD || '',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'rinngos_super_secret_jwt_key_2026',
        expiresIn: process.env.JWT_EXPIRATION || '1d',
        refreshSecret: process.env.JWT_REFRESH_SECRET || 'rinngos_refresh_secret_key_2026',
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRATION || '7d',
    },
    throttler: {
        ttl: parseInt(process.env.THROTTLE_TTL || '60', 10),
        limit: parseInt(process.env.THROTTLE_LIMIT || '60', 10),
    },
    cors: {
        origin: (process.env.CORS_ORIGIN || 'http://localhost:3000,http://localhost:4000').split(','),
    },
});
//# sourceMappingURL=configuration.js.map