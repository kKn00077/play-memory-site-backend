import { CommonModule } from '@app/common';
import baseConfig from '@app/common/config/baseConfig';
import validationSchema from '@app/common/config/config.validation';
import databaseConfig from '@app/common/config/databaseConfig';
import redisConfig from '@app/common/config/redisConfig';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { BoardModule } from './board/board.module';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
            cache: true,
            expandVariables: true,
            load: [baseConfig, databaseConfig, redisConfig],
            validationSchema: validationSchema(true, true, true),
        }),
        CommonModule,
        BoardModule,
        PostModule,
    ],
})
export class ForumModule {}
