import { PaginationArgs } from '@app/common';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class SearchArgs extends PaginationArgs {
    @Field(() => String, { nullable: true })
    option?: string;

    @Field(() => String, { nullable: true })
    keyword?: string;
}
