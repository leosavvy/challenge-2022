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

        return statisticsByDepartment.map((departmentStatistic) => {
            return {
                department: departmentStatistic.department,
                avgSalary: departmentStatistic._avg,
                maxSalary: departmentStatistic._max,
                minSalary: departmentStatistic._min,
            };
        });
    }
}
