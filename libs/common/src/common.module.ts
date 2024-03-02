import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { GraphqlModule } from './graphql/graphql.module';
import { RedisService } from './redis/redis.service';
import { RedisModule } from './redis/redis.module';

@Module({
    providers: [CommonService, RedisService],
    exports: [CommonService],
    imports: [GraphqlModule, RedisModule],
})
export class CommonModule {}
