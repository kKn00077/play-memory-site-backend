import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from './abstract/abstract.model';

@ObjectType()
export class Admin extends AbstractModel {
    @Field(() => String)
    identify: string;

    @Field(() => String, {})
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;

    // TODO
    // @Field(() => Object, { description: '관리자 타입' })
    // type: object;

    @Field(() => String)
    gender: string;

    @Field(() => Date)
    birthday: Date;

    @Field(() => String)
    phone: string;

    // TODO
    // @Field(() => Object, { description: '계좌 정보' })
    // bankInfo: object;

    // TODO
    // @Field(() => Object, { description: '옷 사이즈' })
    // size: object;
}
