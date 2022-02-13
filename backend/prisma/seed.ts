import { PrismaClient } from '@prisma/client';
import { employeeSeed } from './seeds/employee.seed';
const prisma = new PrismaClient();

const seeds: Array<CallableFunction> = [employeeSeed];

export async function seed(): Promise<void> {
    for (const seed of seeds) {
        await seed(prisma)
            .catch((e) => {
                console.error(e);
                process.exit(1);
            })
            .finally(async () => {
                await prisma.$disconnect();
            });
    }
}
