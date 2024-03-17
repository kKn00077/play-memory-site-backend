import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PaginatedPost, Post, PostArgs } from '@app/common';

@Resolver()
export class PostResolver {
    constructor(private postService: PostService) {}

    @Query(() => PaginatedPost)
    async pagenated(@Args() args: PostArgs) {
        return this.postService.paginate(args); // Fix: Pass the correct number of arguments to the paginate method
    }

    @Query(() => [Post])
    async posts() {
        return this.postService.findAll();
    }

    @Query(() => Post)
    async detail(@Args('id') id: string) {
        return this.postService.findOne(id);
    }
}
