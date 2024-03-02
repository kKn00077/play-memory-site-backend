import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
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
        // CommonModule,
    ],
    controllers: [GatewayController],
    providers: [GatewayService],
})
export class GatewayModule {}
