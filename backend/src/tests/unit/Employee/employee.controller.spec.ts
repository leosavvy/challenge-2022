import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from 'src/API/Employee/employee.controller';
import { EmployeeDAO } from 'src/Domain/Employee/DAOs/employee';
import { CreateEmployeeDTO } from 'src/Domain/Employee/DTOs/create';
import { EmployeeModule } from 'src/Domain/Employee/employee.module';
import { EmployeeService } from 'src/Domain/Employee/employee.service';
import { employeeMock } from 'src/tests/Mocks/Employee/employee.mock';
import { EmployeeServiceMock } from 'src/tests/Mocks/Employee/employee.service.mock';
import { v4 as uuidv4 } from 'uuid';

describe('EmployeeController', () => {
    let controller: EmployeeController;
    let employeeServiceMock;

    beforeEach(async () => {
        employeeServiceMock = EmployeeServiceMock();
        const module: TestingModule = await Test.createTestingModule({
            imports: [EmployeeModule],
            controllers: [EmployeeController],
            providers: [],
        })
            .overrideProvider(EmployeeService)
            .useValue(employeeServiceMock)
            .compile();

        controller = module.get<EmployeeController>(EmployeeController);
    });

    it('should return all existent employees', async () => {
        employeeServiceMock.getAllEmployees.mockImplementation(() => {
            return employeeMock;
        });

        const employees =
            (await controller.getAllEmployees()) as Array<EmployeeDAO>;
        expect(Array.isArray(employees)).toBe(true);
        expect(
            employees.every(
                (employee) =>
                    employee.employeeId &&
                    typeof employee.employeeId === 'string',
            ),
        );
    });

    it('should return the created employee when sending a post request', async () => {
        employeeServiceMock.createEmployee.mockImplementation(
            (createEmployeeDTO: CreateEmployeeDTO): EmployeeDAO => {
                return {
                    employeeId: uuidv4(),
                    department: createEmployeeDTO.department,
                    salary: createEmployeeDTO.salary,
                };
            },
        );

        const createdEmployee = (await controller.createEmployee({
            department: 'IT',
            salary: 3000,
        })) as EmployeeDAO;

        expect(
            createdEmployee.employeeId &&
                typeof createdEmployee.employeeId === 'string',
        ).toBe(true);
    });

    describe('Exceptions', () => {
        it('should return http exception if the api fails', async () => {
            Object.keys(employeeServiceMock).forEach((method) => {
                employeeServiceMock[method].mockImplementation(() => {
                    throw new Error('Internal Server Error');
                });
            });

            const allEmployees = await controller.getAllEmployees();
            expect(allEmployees).toBeInstanceOf(HttpException);

            const createdEmployee = await controller.createEmployee({
                department: 'IT',
                salary: 3000,
            });
            expect(createdEmployee).toBeInstanceOf(HttpException);
        });
    });
});
