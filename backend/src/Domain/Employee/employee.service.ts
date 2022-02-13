import { Inject, Injectable } from '@nestjs/common';
import { EmployeeDAO } from './DAOs/employee';
import { CreateEmployeeDTO } from './DTOs/create';
import { IEmployeeRepository } from './i-employee.repository';

@Injectable()
export class EmployeeService {
    constructor(
        @Inject('EmployeeRepository')
        private readonly employeeRepository: IEmployeeRepository,
    ) {}

    async getAllEmployees(): Promise<Array<EmployeeDAO>> {
        return await this.employeeRepository.getAll();
    }
    async createEmployee(
        createEmployeeDTO: CreateEmployeeDTO,
    ): Promise<EmployeeDAO> {
        return await this.employeeRepository.create(createEmployeeDTO);
    }
}
