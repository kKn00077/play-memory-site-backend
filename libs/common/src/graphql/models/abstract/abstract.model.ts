import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class AbstractModel {
    @Field(() => ID, {})
    id: string;

    @Field(() => String)
    createdAt: Date;

    @Field(() => String)
    updatedAt: Date;
}
