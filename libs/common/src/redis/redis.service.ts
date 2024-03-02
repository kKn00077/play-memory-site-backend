import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RedisService {
    constructor(private configService: ConfigService) {}

    getMicroServiceOptions(): RedisOptions {
        return {
            transport: Transport.REDIS,
            options: {
                host: this.configService.get<string>('redis.host'),
                port: this.configService.get<number>('redis.port'),
                username: this.configService.get<string>('redis.user'),
                password: this.configService.get<string>('redis.pw'),
            },
        };
    }
}
