import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/Utils/Services/services.module';
import { EmployeeRepoProvider } from './employee.persistence.provider';
import { EmployeeRepository } from './employee.repository';

@Module({
    imports: [ServicesModule],
    providers: [EmployeeRepoProvider, EmployeeRepository],
    exports: [EmployeeRepoProvider, EmployeeRepository],
})
export class EmployeeRepositoryModule {}
