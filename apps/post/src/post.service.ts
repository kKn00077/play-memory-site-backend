import { Injectable } from '@nestjs/common';
import { PaginatedPost, Post } from './graphql/models/post.model';
import { Board } from './graphql/models/board.model';
import { Admin } from '@app/common';
import { PostArgs } from './graphql/args/post.args';

@Injectable()
export class PostService {
    // TODO 더미 데이터
    async paginate(args: PostArgs): Promise<PaginatedPost> {
        console.log(args);

        const paginate = new PaginatedPost();
        paginate.nodes = await this.findAll();
        paginate.totalCount = paginate.nodes.length;

        const pageCount = Math.ceil(paginate.totalCount / 10);
        paginate.pages = Array.from({ length: pageCount }, (_, i) => i + 1);
        paginate.hasNextPage = true;

        return paginate;
    }

    // TODO 더미 데이터
    async findAll(): Promise<Post[]> {
        const posts = [];
        const boards = [];

        for (let index = 1; index <= 2; index++) {
            const board = new Board();
            board.id = index.toString();

            if (index === 1) {
                board.name = '공지사항';
            } else {
                board.name = '연습일지';
            }

            board.createdAt = new Date();
            board.updatedAt = new Date();

            boards.push(board);
        }

        for (let index = 1; index <= 53; index++) {
            const post = new Post();
            post.id = index.toString();
            post.board = boards[Math.floor(Math.random() * 2)];
            post.title = '안녕하세요' + index + '번째 제목입니다';
            post.contents =
                '안녕하세요!<br><p>' + index + '번째 게시글 내용입니다</p>';
            post.visibility = true;
            post.admin = new Admin();
            post.admin.id = '1';
            post.admin.name = '이름이라네';
            post.createdAt = new Date();
            post.updatedAt = new Date();

            posts.push(post);
        }

        return Promise.resolve(posts);
    }

    // TODO 더미 데이터
    async findOne(id: string): Promise<Post> {
        const post = new Post();
        post.id = id;
        post.board = new Board();
        post.board.id = '123';
        post.board.name = '공지사항';
        post.board.description = '공지사항 게시판';
        post.title = '안녕하세요';
        post.contents = '안녕하세요 내용입니다';
        post.visibility = true;
        post.admin = new Admin();
        post.admin.id = '1';
        post.admin.name = '이름이라네';
        post.createdAt = new Date();
        post.updatedAt = new Date();
        return Promise.resolve(post);
    }
}
