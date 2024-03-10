import { Controller, Get } from '@nestjs/common';

@Controller()
export class ForumController {
    @Get()
    getHello(): string {
        return 'Hello World!';
    }
}
