import { PrismaClient } from '.prisma/client';

export async function employeeSeed(prisma: PrismaClient): Promise<void> {
    const employees = [
        {
            department: 'IT',
            salary: 2000,
        },
        {
            department: 'IT',
            salary: 4000,
        },
        {
            department: 'IT',
            salary: 3000,
        },
        {
            department: 'CX',
            salary: 1000,
        },
        {
            department: 'CX',
            salary: 1500,
        },
    ];

    for (const employee of employees) {
        await prisma.employee.create({
            data: employee,
        });
    }
}
