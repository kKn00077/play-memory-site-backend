import { registerAs } from '@nestjs/config';

export default registerAs('base', () => ({
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT as string, 10) || 3000,
}));
