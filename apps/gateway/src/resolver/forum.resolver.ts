import { Board, PaginatedPost, Post, PostArgs } from '@app/common';
import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';

@Resolver()
export class GatewayForumResolver {
    constructor(@Inject('FORUM_SERVICE') private client: ClientProxy) {}

    @Query(() => PaginatedPost)
    async pagenated(@Args() args: PostArgs) {
        return this.client.send({ cmd: 'postsPaginate' }, args);
    }

    @Query(() => [Post])
    async posts() {
        return this.client.send({ cmd: 'postsFindAll' }, {});
    }

    @Query(() => Post)
    async detail(@Args('id') id: string) {
        return this.client.send({ cmd: 'postFindOne' }, id);
    }

    @Query(() => [Board])
    async boards() {
        return this.client.send({ cmd: 'boardsFindAll' }, {});
    }
}
