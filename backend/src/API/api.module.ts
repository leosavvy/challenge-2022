import { Module } from '@nestjs/common';
import { EmployeeModule } from 'src/Domain/Employee/employee.module';
import { StatisticModule } from 'src/Domain/Statistic/statistic.module';
import { EmployeeController } from './Employee/employee.controller';
import { StatisticController } from './Statistic/statistic.controller';

@Module({
    imports: [EmployeeModule, StatisticModule],
    controllers: [EmployeeController, StatisticController],
})
export class APIModule {}
