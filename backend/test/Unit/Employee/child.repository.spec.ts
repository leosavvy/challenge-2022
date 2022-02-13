import { Test, TestingModule } from '@nestjs/testing';
import { employeeMock } from 'test/Mocks/employee.mock';
import { PrismaService } from 'Utils/Services/Prisma/prisma.service';
import { Employee } from '@prisma/client';

describe('EmployeeRepository', () => {
    let prismaServiceMock;
    let employeeRepository: EmployeeRepository;

    beforeEach(async () => {
        prismaServiceMock = PrismaServiceMock();
        const module: TestingModule = await Test.createTestingModule({
            imports: [EmployeeRepositoryModule, ServicesModule],
            controllers: [],
            providers: [],
        })
            .overrideProvider(PrismaService)
            .useValue(prismaServiceMock)
            .compile();

        employeeRepository = module.get<EmployeeRepository>(EmployeeRepository);
    });

    it('should return a list containing all the existing employees', async () => {
        prismaServiceMock.child.findMany.mockImplementation(() => {
            return employeeMock;
        });

        const employees: Array<Employee> = await employeeRepository.getAll();
        expect(
            employees.every((employee) => {
                return (
                    Object.keys(employee) ===
                    ['employeeId', 'department', 'salary']
                );
            }),
        ).toBe(true);
        expect(employees.length).toBeGreaterThan(0);
    });
});
