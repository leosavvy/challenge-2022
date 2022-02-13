import { Provider } from '@nestjs/common';
import { StatisticRepository } from './statistic.repository';

export const StatisticRepoProvider: Provider = {
    provide: 'StatisticRepository',
    useClass: StatisticRepository,
};
