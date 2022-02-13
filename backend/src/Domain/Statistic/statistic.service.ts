import { Inject, Injectable } from '@nestjs/common';
import { StatisticDAO } from './DAOs/statistic.dao';
import { IStatisticRepository } from './i-statistic.repository';

@Injectable()
export class StatisticService {
    constructor(
        @Inject('StatisticRepository')
        private readonly statisticRepository: IStatisticRepository,
    ) {}

    async getStatisticByDepartment(): Promise<Array<StatisticDAO>> {
        const statisticsByDepartment =
            await this.statisticRepository.getStatisticByDepartment();
        const statisticsResult: Array<StatisticDAO> = [];

        for (const departmentStatistic of statisticsByDepartment) {
            statisticsResult.push({
                department: departmentStatistic.department,
                avgSalary: departmentStatistic._avg,
                maxSalary: departmentStatistic._max,
                minSalary: departmentStatistic._min,
            });
        }

        return statisticsResult;
    }
}
