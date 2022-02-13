import { Injectable, Logger } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { CreateEmployeeDTO } from 'src/Domain/Employee/DTOs/create';
import { IEmployeeRepository } from 'src/Domain/Employee/i-employee.repository';
import { PrismaService } from 'src/Utils/Services/Prisma/prisma.service';

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<Array<Employee>> {
        return await this.prisma.employee.findMany();
    }
    async create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        return await this.prisma.employee.create({
            data: createEmployeeDTO,
        });
    }
}
