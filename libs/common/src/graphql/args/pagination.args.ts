import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
    @Field(() => Int, { nullable: true })
    page: number = 1;

    @Field(() => Int, { nullable: true })
    limit: number = 10;

    get offset(): number {
        const page = this.page ?? 1;
        const limit = this.limit ?? 10;
        return (page - 1) * limit;
    }
}
