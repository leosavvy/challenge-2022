import { Test, TestingModule } from '@nestjs/testing';
import { employeeMock } from 'src/tests/Mocks/Employee/employee.mock';
import { EmployeeRepositoryMock } from 'src/tests/Mocks/Employee/employee.repository.mock';

describe('ChildService', () => {
    let employeeRepositoryMock;
    let statisticService: StatisticService;

    beforeEach(async () => {
        employeeRepositoryMock = EmployeeRepositoryMock();

        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [
                StatisticService,
                {
                    provide: 'EmployeeRepository',
                    useValue: employeeRepositoryMock,
                },
            ],
        }).compile();

        statisticService = module.get<StatisticService>(StatisticService);
    });

    it('should return an object matching by id children', async () => {
        employeeRepositoryMock.getAll.mockImplementation(() => {
            return employeeMock;
        });

        // TODO -> Statistic Service
        const statistics = await statisticService.getStatistics();

        // TODO -> Assertions
    });
});
