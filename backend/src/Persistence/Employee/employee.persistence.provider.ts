import { Provider } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';

export const EmployeeRepoProvider: Provider = {
    provide: 'EmployeeRepository',
    useClass: EmployeeRepository,
};
