declare const _default: () => {
    port: number;
    database: {
        url: string;
    };
    redis: {
        host: string;
        port: number;
        password: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
        refreshSecret: string;
        refreshExpiresIn: string;
    };
    throttler: {
        ttl: number;
        limit: number;
    };
    cors: {
        origin: string[];
    };
};
export default _default;
