import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PostService } from '../../post.service';
import { BoardService } from '../../board/board.service';
import { PaginatedPost, Post } from '../models/post.model';
import { Board } from '../models/board.model';
import { PostArgs } from '../args/post.args';

@Resolver()
export class PostResolver {
    constructor(
        private postService: PostService,
        private boardService: BoardService,
    ) {}

    @Query(() => PaginatedPost)
    async pagenated(@Parent() board: Board, @Args() args: PostArgs) {
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

    @Query(() => [Board])
    async boards() {
        return this.boardService.findAll();
    }
}
