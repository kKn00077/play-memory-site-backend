import { MessagePattern, Payload } from '@nestjs/microservices';
import { PostService } from './post.service';
import { PostArgs } from '@app/common';
import { Controller } from '@nestjs/common';

@Controller()
export class PostHandler {
    constructor(private postService: PostService) {}

    @MessagePattern({ cmd: 'postsPaginate' })
    async pagenated(@Payload() args: PostArgs) {
        return this.postService.paginate(args); // Fix: Pass the correct number of arguments to the paginate method
    }

    @MessagePattern({ cmd: 'postsFindAll' })
    async posts() {
        return this.postService.findAll();
    }

    @MessagePattern({ cmd: 'postFindOne' })
    async detail(@Payload() id: string) {
        return this.postService.findOne(id);
    }
}
