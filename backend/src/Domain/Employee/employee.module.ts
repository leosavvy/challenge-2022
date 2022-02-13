import { Module } from '@nestjs/common';
import { EmployeeRepositoryModule } from 'src/Persistence/Employee/employee.repository.module';
import { EmployeeService } from './employee.service';

@Module({
    imports: [EmployeeRepositoryModule],
    providers: [EmployeeService],
    exports: [EmployeeService],
})
export class EmployeeModule {}
