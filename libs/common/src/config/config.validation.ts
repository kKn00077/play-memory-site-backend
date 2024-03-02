import * as Joi from 'joi';

export default function validationSchema(
    base: boolean = true,
    database: boolean = true,
    redis: boolean = true,
) {
    let validationSchema = Joi.object({});

    if (base) {
        validationSchema = validationSchema.keys({
            NODE_ENV: Joi.string()
                .valid('dev', 'prod', 'stg', 'local')
                .default('prod'),
            PORT: Joi.number().default(3000),
        });
    }

    if (database) {
        validationSchema = validationSchema.keys({
            DATABASE_ID: Joi.string().required(),
            DATABASE_PW: Joi.string().required(),
            MONGODB_URI: Joi.string().required(),
        });
    }

    if (redis) {
        validationSchema = validationSchema.keys({
            REDIS_HOST: Joi.string().required(),
            REDIS_PORT: Joi.number().required(),
            REDIS_USER: Joi.string().required(),
            REDIS_PW: Joi.string().required(),
        });
    }

    return validationSchema;
}
