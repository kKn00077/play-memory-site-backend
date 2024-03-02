import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT as string, 10) || 18677,
    user: process.env.REDIS_USER,
    pw: process.env.REDIS_PW,
}));
