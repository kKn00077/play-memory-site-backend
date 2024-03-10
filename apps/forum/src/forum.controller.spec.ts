import { Test, TestingModule } from '@nestjs/testing';
import { ForumController } from './forum.controller';
import { PostService } from './post/post.service';

describe('ForumController', () => {
    let forumController: ForumController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ForumController],
            providers: [PostService],
        }).compile();

        forumController = app.get<ForumController>(ForumController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(forumController.getHello()).toBe('Hello World!');
        });
    });
});
