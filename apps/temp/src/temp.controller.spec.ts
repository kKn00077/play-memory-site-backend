import { Test, TestingModule } from '@nestjs/testing';
import { TempController } from './temp.controller';
import { TempService } from './temp.service';

describe('TempController', () => {
    let tempController: TempController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [TempController],
            providers: [TempService],
        }).compile();

        tempController = app.get<TempController>(TempController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(tempController.getHello()).toBe('Hello World!');
        });
    });
});
