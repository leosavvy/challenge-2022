import { PrismaClient, Employee } from '.prisma/client';
import { v4 as uuidv4 } from 'uuid';

enum Departments {
    'IT',
    'Marketing',
    'CX',
}

const DEPARTMENTS_COUNT = 3;
const MIN_SALARY = 1000;
const MAX_SALARY = 5000;

const employeeMock: Array<Employee> = [
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

    for (const employee of employeeMock) {
        await prisma.employee.upsert({
            where: {
                employeeId: employee.employeeId,
            },
            update: { ...employee },
            create: { ...employee },
        });
    }
}
