import { NestFactory } from '@nestjs/core';
import { RedisService } from '@app/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ForumModule } from './forum.module';

async function bootstrap() {
    const app = await NestFactory.create(ForumModule);
    const redisService = app.get(RedisService);

    app.connectMicroservice<MicroserviceOptions>(
        redisService.getMicroServiceOptions(),
    );

    await app.startAllMicroservices();
    await app.listen(3001);
}
bootstrap();
