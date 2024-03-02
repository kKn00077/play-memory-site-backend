import { Module } from '@nestjs/common';
import { TempController } from './temp.controller';
import { TempService } from './temp.service';
import { DatabaseModule, RedisModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import validationSchema from '@app/common/config/config.validation';
import baseConfig from '@app/common/config/baseConfig';
import databaseConfig from '@app/common/config/databaseConfig';
import redisConfig from '@app/common/config/redisConfig';

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
    ],
    controllers: [TempController],
    providers: [TempService],
})
export class TempModule {}
