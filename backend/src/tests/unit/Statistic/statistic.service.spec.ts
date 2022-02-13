import { Test, TestingModule } from '@nestjs/testing';
import { StatisticService } from 'src/Domain/Statistic/statistic.service';
import { StatisticRepositoryMock } from 'src/tests/Mocks/Statistic/statistic.repository.mock';

describe('ChildService', () => {
    let statisticRepositoryMock;
    let statisticService: StatisticService;

    beforeEach(async () => {
        statisticRepositoryMock = StatisticRepositoryMock();

        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [
                StatisticService,
                {
                    provide: 'StatisticRepository',
                    useValue: statisticRepositoryMock,
                },
            ],
        }).compile();

        statisticService = module.get<StatisticService>(StatisticService);
    });

    it('should return the statistics by department', async () => {
        statisticRepositoryMock.getStatisticByDepartment.mockImplementation(
            () => {
                return [
                    {
                        department: 'It',
                        _min: 1000,
                        _max: 5000,
                        _avg: 3000,
                    },
                    {
                        department: 'Marketing',
                        _min: 1000,
                        _max: 5000,
                        _avg: 3000,
                    },
                ];
            },
        );

        const statistics = await statisticService.getStatisticByDepartment();

        expect(statistics).not.toBe(null);
        expect(Array.isArray(statistics)).toBe(true);
        expect(
            statistics[0].department &&
                typeof statistics[0].department === 'string',
        ).toBe(true);
        expect(
            statistics[0].minSalary &&
                typeof statistics[0].minSalary === 'number',
        ).toBe(true);
        expect(
            statistics[0].maxSalary &&
                typeof statistics[0].maxSalary === 'number',
        ).toBe(true);
        expect(
            statistics[0].avgSalary &&
                typeof statistics[0].avgSalary === 'number',
        ).toBe(true);
    });
});
