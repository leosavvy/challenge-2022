import { EmployeeDAO } from './DAOs/employee';
import { CreateEmployeeDTO } from './DTOs/create';

export interface IEmployeeRepository {
    getAll(): Promise<Array<EmployeeDAO>>;
    create(createEmployeeDTO: CreateEmployeeDTO): Promise<EmployeeDAO>;
}
