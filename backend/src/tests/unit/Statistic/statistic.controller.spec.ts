import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { StatisticController } from 'src/API/Statistic/statistic.controller';
import { StatisticDAO } from 'src/Domain/Statistic/DAOs/statistic.dao';
import { StatisticModule } from 'src/Domain/Statistic/statistic.module';
import { StatisticService } from 'src/Domain/Statistic/statistic.service';
import { statisticMock } from 'src/tests/Mocks/Statistic/statistic.mock';
import { StatisticServiceMock } from 'src/tests/Mocks/Statistic/statistic.service.mock';

describe('StatisticController', () => {
    let controller: StatisticController;
    let statisticServiceMock;

    beforeEach(async () => {
        statisticServiceMock = StatisticServiceMock();
        const module: TestingModule = await Test.createTestingModule({
            imports: [StatisticModule],
            controllers: [StatisticController],
            providers: [],
        })
            .overrideProvider(StatisticService)
            .useValue(statisticServiceMock)
            .compile();

        controller = module.get<StatisticController>(StatisticController);
    });

    it('should return all statistics by department', async () => {
        statisticServiceMock.getStatisticByDepartment.mockImplementation(() => {
            return statisticMock;
        });

        const statistics =
            (await controller.getAllStatistics()) as Array<StatisticDAO>;
        expect(Array.isArray(statistics)).toBe(true);
    });

    describe('Exceptions', () => {
        it('should return http exception if the api fails', async () => {
            Object.keys(statisticServiceMock).forEach((method) => {
                statisticServiceMock[method].mockImplementation(() => {
                    throw new Error('Internal Server Error');
                });
            });

            const childrenById = await controller.getAllStatistics();
            expect(childrenById).toBeInstanceOf(HttpException);
        });
    });
});
