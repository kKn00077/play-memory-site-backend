import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { BoardHandler } from './board.handler';

@Module({
    controllers: [BoardHandler],
    providers: [BoardService, BoardResolver],
})
export class BoardModule {}
