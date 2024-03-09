import { AbstractModel } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Board extends AbstractModel {
    @Field(() => String, {})
    name: string;

    @Field(() => String, { nullable: true })
    description: string;
}
