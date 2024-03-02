import { Injectable } from '@nestjs/common';

@Injectable()
export class TempService {
    getHello(): string {
        return 'Hello World! TEMP SERVICE';
    }
}
