import { Injectable, Logger } from '@nestjs/common';
import { IStatisticRepository } from 'src/Domain/Statistic/i-statistic.repository';
import { PrismaService } from 'src/Utils/Services/Prisma/prisma.service';

@Injectable()
export class StatisticRepository implements IStatisticRepository {
    constructor(private prisma: PrismaService) {}

    // Must be any since the result schema is dynamic
    async getStatisticByDepartment(): Promise<any> {
        const result2 = await this.prisma.employee.findMany();
        const result = await this.prisma.employee.groupBy({
            by: ['department'],
            _avg: {
                salary: true,
            },
            _min: {
                salary: true,
            },
            _max: {
                salary: true,
            },
        });

        return result;
    }
}
