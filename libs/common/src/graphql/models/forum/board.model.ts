import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../abstract/abstract.model';

@ObjectType()
export class Board extends AbstractModel {
    @Field(() => String, {})
    name: string;

    @Field(() => String, { nullable: true })
    description: string;
}
