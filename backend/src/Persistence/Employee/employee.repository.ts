import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { IEmployeeRepository } from 'src/Domain/Employee/i-employee.repository';
import { PrismaService } from 'src/Utils/Services/Prisma/prisma.service';

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
    constructor(private prisma: PrismaService) {}

    async getAllEmployees(): Promise<Array<Employee>> {
        return await this.prisma.employee.findMany();
    }
}
