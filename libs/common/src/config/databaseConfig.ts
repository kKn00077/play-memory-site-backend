import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    id: process.env.DATABASE_ID,
    pw: process.env.DATABASE_PW,
    uri: process.env.MONGODB_URI,
}));
