import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CommonModule, DatabaseModule, RedisModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import validationSchema from '@app/common/config/config.validation';
import baseConfig from '@app/common/config/baseConfig';
import databaseConfig from '@app/common/config/databaseConfig';
import redisConfig from '@app/common/config/redisConfig';
import { PostResolver } from './graphql/resolvers/post.resolver';
import { BoardService } from './board/board.service';

@Module({
    // TODO imports
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
            cache: true,
            expandVariables: true,
            load: [baseConfig, databaseConfig, redisConfig],
            validationSchema: validationSchema(true, true, true),
        }),
        DatabaseModule,
        RedisModule,
        CommonModule,
    ],
    controllers: [PostController],
    providers: [PostService, PostResolver, BoardService],
})
export class PostModule {}
