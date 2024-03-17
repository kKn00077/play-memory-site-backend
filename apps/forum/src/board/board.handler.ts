import { MessagePattern } from '@nestjs/microservices';
import { BoardService } from './board.service';
import { Controller } from '@nestjs/common';

@Controller()
export class BoardHandler {
    constructor(private boardService: BoardService) {}

    @MessagePattern({ cmd: 'boardsFindAll' })
    async boards() {
        return this.boardService.findAll();
    }
}
