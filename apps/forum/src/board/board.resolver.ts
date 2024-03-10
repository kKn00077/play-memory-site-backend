import { BoardService } from './board.service';
import { Board } from '../graphql/models/board.model';
import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class BoardResolver {
    constructor(private boardService: BoardService) {}

    @Query(() => [Board])
    async boards(): Promise<Board[]> {
        return this.boardService.findAll();
    }
}
