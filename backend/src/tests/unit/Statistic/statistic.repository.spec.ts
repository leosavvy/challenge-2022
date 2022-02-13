import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/Utils/Services/Prisma/prisma.service';
import { PrismaServiceMock } from 'src/tests/Util/prisma-service';
import { ServicesModule } from 'src/Utils/Services/services.module';
import { StatisticRepository } from 'src/Persistence/Statistic/statistic.repository';
import { StatisticRepositoryModule } from 'src/Persistence/Statistic/statistic.repository.module';

describe('EmployeeRepository', () => {
    let prismaServiceMock;
    let statisticRepository: StatisticRepository;

    beforeEach(async () => {
        prismaServiceMock = PrismaServiceMock();
        const module: TestingModule = await Test.createTestingModule({
            imports: [StatisticRepositoryModule, ServicesModule],
            controllers: [],
            providers: [],
        })
            .overrideProvider(PrismaService)
            .useValue(prismaServiceMock)
            .compile();

        statisticRepository =
            module.get<StatisticRepository>(StatisticRepository);
    });

    it('should return the statistics object based on the employee table', async () => {
        prismaServiceMock.employee.groupBy.mockImplementation(() => {
            return true;
        });

        await statisticRepository.getStatisticByDepartment();

        expect(prismaServiceMock.employee.groupBy).toHaveBeenCalled();
        expect(prismaServiceMock.employee.groupBy).toHaveBeenCalledWith({
            _avg: {
                salary: true,
            },
            _max: {
                salary: true,
            },
            _min: {
                salary: true,
            },
            by: ['department'],
        });
    });
});
