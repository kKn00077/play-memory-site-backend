import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostHandler } from './post.handler';

@Module({
    controllers: [PostHandler],
    providers: [PostService, PostResolver],
})
export class PostModule {}
