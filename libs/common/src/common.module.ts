import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { GraphqlModule } from './graphql/graphql.module';
import { RedisModule } from './redis/redis.module';
import { DatabaseModule } from './database/database.module';

@Module({
    providers: [CommonService],
    exports: [CommonService],
    imports: [DatabaseModule, GraphqlModule, RedisModule],
})
export class CommonModule {}
