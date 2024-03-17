import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '@app/common';
import validationSchema from '@app/common/config/config.validation';
import baseConfig from '@app/common/config/baseConfig';
import databaseConfig from '@app/common/config/databaseConfig';
import redisConfig from '@app/common/config/redisConfig';
import { GatewayForumResolver } from './resolver/forum.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
        ClientsModule.register([
            {
                name: 'FORUM_SERVICE',
                transport: Transport.REDIS,
                options: {
                    host: process.env.REDIS_HOST as string,
                    port: Number(process.env.REDIS_PORT as string),
                    username: process.env.REDIS_USER as string,
                    password: process.env.REDIS_PW as string,
                },
            },
        ]),
    ],
    controllers: [GatewayController],
    providers: [GatewayService, GatewayForumResolver],
})
export class GatewayModule {}
