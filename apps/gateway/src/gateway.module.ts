import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
            cache: true,
            expandVariables: true,
            validationSchema: Joi.object({
                NODE_ENV: Joi.string()
                    .valid('dev', 'prod', 'stg', 'local')
                    .default('prod'),
                PORT: Joi.number().default(3000),
                DATABASE_ID: Joi.string().required(),
                DATABASE_PW: Joi.string().required(),
                MONGODB_URI: Joi.string().required(),
            }),
        }),
        DatabaseModule,
    ],
    controllers: [GatewayController],
    providers: [GatewayService],
})
export class GatewayModule {}
