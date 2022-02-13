import { Employee } from '@prisma/client';

export interface IEmployeeRepository {
    getAllEmployees(): Promise<Array<Employee>>;
}
