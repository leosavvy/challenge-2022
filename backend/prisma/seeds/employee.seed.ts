import { PrismaClient, Employee } from '.prisma/client';
import {
    Departments,
    DEPARTMENTS_COUNT,
    MAX_SALARY,
    MIN_SALARY,
} from 'src/Utils/constants';
import { v4 as uuidv4 } from 'uuid';

const employees: Array<Employee> = [
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
];

export async function employeeSeed(prisma: PrismaClient): Promise<void> {
    prisma.employee.deleteMany();

    for (const employee of employees) {
        await prisma.employee.upsert({
            where: {
                employeeId: employee.employeeId,
            },
            update: { ...employee },
            create: { ...employee },
        });
    }
}
