import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from 'src/Domain/Employee/employee.service';
import { employeeMock } from 'src/tests/Mocks/Employee/employee.mock';
import { EmployeeRepositoryMock } from 'src/tests/Mocks/Employee/employee.repository.mock';

describe('ChildService', () => {
    let employeeRepositoryMock;
    let employeeService: EmployeeService;

    beforeEach(async () => {
        employeeRepositoryMock = EmployeeRepositoryMock();

        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [
                EmployeeService,
                {
                    provide: 'EmployeeRepository',
                    useValue: employeeRepositoryMock,
                },
            ],
        }).compile();

        employeeService = module.get<EmployeeService>(EmployeeService);
    });

    it('should return the employees by department', async () => {
        employeeRepositoryMock.getAll.mockImplementation(() => {
            return employeeMock;
        });

        const employees = await employeeService.getAllEmployees();

        expect(employees).not.toBe(null);
        expect(Array.isArray(employees)).toBe(true);
        expect(
            employees[0].department &&
                typeof employees[0].department === 'string',
        ).toBe(true);
        expect(
            employees[0].employeeId &&
                typeof employees[0].employeeId === 'string',
        ).toBe(true);
        expect(
            employees[0].salary && typeof employees[0].salary === 'number',
        ).toBe(true);
    });
});
