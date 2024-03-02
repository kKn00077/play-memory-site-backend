import { NestFactory } from '@nestjs/core';
import { TempModule } from './temp.module';
import { RedisService } from '@app/common';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.create(TempModule);
    const redisService = app.get(RedisService);

    app.connectMicroservice<MicroserviceOptions>(
        redisService.getMicroServiceOptions(),
    );

    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
