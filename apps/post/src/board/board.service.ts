import { Injectable } from '@nestjs/common';
import { Board } from '../graphql/models/board.model';

@Injectable()
export class BoardService {
    // TODO
    async findAll(): Promise<Board[]> {
        const arr = [];

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

            arr.push(board);
        }

        return arr;
    }
}
