import { Test, TestingModule } from '@nestjs/testing';
import { employeeMock } from 'src/tests/Mocks/Employee/employee.mock';
import { PrismaService } from 'src/Utils/Services/Prisma/prisma.service';
import { PrismaServiceMock } from 'src/tests/Util/prisma-service';
import { ServicesModule } from 'src/Utils/Services/services.module';
import { EmployeeRepositoryModule } from 'src/Persistence/Employee/employee.repository.module';
import { EmployeeRepository } from 'src/Persistence/Employee/employee.repository';
import { v4 as uuidv4 } from 'uuid';
import { CreateEmployeeDTO } from 'src/Domain/Employee/DTOs/create';

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

        const employees = await employeeRepository.getAll();

        expect(Array.isArray(employees)).toBe(true);
        expect(employees[0].department).toBeDefined();
    });

    it('should create an employee record', async () => {
        const previousLength = employeeMock.length;
        const createEmployeeDTO: CreateEmployeeDTO = {
            department: 'IT',
            salary: 3000,
        };

        prismaServiceMock.employee.create.mockImplementation((args) => {
            employeeMock.push({
                department: args['data']['department'],
                employeeId: uuidv4(),
                salary: args['data']['salary'],
            });
            return employeeMock[employeeMock.length - 1];
        });

        const createdEmployee = await employeeRepository.create(
            createEmployeeDTO,
        );

        expect(employeeMock.length).toBe(previousLength + 1);
        expect(createdEmployee.department).toBe(createEmployeeDTO.department);
        expect(createdEmployee.salary).toBe(createEmployeeDTO.salary);
        expect(createdEmployee.employeeId).toBeDefined();
    });
});
