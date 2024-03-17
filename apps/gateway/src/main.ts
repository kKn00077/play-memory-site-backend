import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { RedisService } from '@app/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(GatewayModule);

    const redisService = app.get(RedisService);
    const configService = app.get(ConfigService);

    app.connectMicroservice<MicroserviceOptions>(
        redisService.getMicroServiceOptions(),
    );

    await app.startAllMicroservices();
    await app.listen(configService.get<number>('base.port', 3000), '0.0.0.0');
}
bootstrap();
