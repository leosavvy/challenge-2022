import {
    Body,
    Controller,
    Get,
    HttpException,
    Logger,
    Post,
} from '@nestjs/common';
import { errorHandler } from '../util/error-handler';
import { EmployeeDAO } from 'src/Domain/Employee/DAOs/employee';
import { EmployeeService } from 'src/Domain/Employee/employee.service';
import { CreateEmployeeDTO } from 'src/Domain/Employee/DTOs/create';
import {
    HealthStatuses,
    HealthStatusResponse,
} from 'src/Utils/Health/health-statuses';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get('/')
    async getAllEmployees(): Promise<Array<EmployeeDAO> | HttpException> {
        try {
            return await this.employeeService.getAllEmployees();
        } catch (error) {
            return errorHandler(error);
        }
    }

    @Post('/')
    async createEmployee(
        @Body() body: CreateEmployeeDTO,
    ): Promise<EmployeeDAO | HttpException> {
        try {
            return await this.employeeService.createEmployee(body);
        } catch (error) {
            return errorHandler(error);
        }
    }

    @Get('/health/check')
    async healthCheck(): Promise<HealthStatusResponse> {
        try {
            await this.employeeService.getAllEmployees();
            return { status: HealthStatuses.Healthy };
        } catch (error) {
            return { status: HealthStatuses.Unhealthy };
        }
    }
}
