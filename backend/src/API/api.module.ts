import { Module } from '@nestjs/common';
import { EmployeeModule } from 'src/Domain/Employee/employee.module';

@Module({
    imports: [EmployeeModule],
    controllers: [EmployeeController],
})
export class APIModule {}
