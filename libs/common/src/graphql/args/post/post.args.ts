import { SearchArgs } from '@app/common';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class PostArgs extends SearchArgs {
    @Field(() => String, { nullable: true })
    board?: string;
}
