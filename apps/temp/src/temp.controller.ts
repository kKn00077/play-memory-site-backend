import { Controller, Get } from '@nestjs/common';
import { TempService } from './temp.service';

@Controller()
export class TempController {
    constructor(private readonly tempService: TempService) {}

    @Get()
    getHello(): string {
        return this.tempService.getHello();
    }
}
