import { Test, TestingModule } from '@nestjs/testing';
import { employeeMock } from 'src/tests/Mocks/employee.mock';
import { PrismaService } from 'src/Utils/Services/Prisma/prisma.service';
import { Employee } from '@prisma/client';
import { PrismaServiceMock } from 'src/tests/Util/prisma-service';
import { ServicesModule } from 'src/Utils/Services/services.module';
import { EmployeeRepositoryModule } from 'src/Persistence/Employee/employee.repository.module';
import { EmployeeRepository } from 'src/Persistence/Employee/employee.repository';

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
        prismaServiceMock.employee.findMany.mockImplementation(() => {
            return employeeMock;
        });

        const employees: Array<Employee> =
            await employeeRepository.getAllEmployees();

        expect(Object.keys(employees[0])).toContain('employeeId');
        expect(employees.length).toBeGreaterThan(0);
    });
});
