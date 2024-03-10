import { NestFactory } from '@nestjs/core';
import { PostModule } from './post.module';
import { RedisService } from '@app/common';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.create(PostModule);
    const redisService = app.get(RedisService);

    app.connectMicroservice<MicroserviceOptions>(
        redisService.getMicroServiceOptions(),
    );

    await app.startAllMicroservices();
    await app.listen(3001);
}
bootstrap();
