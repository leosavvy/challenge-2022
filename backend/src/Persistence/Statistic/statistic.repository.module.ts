import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/Utils/Services/services.module';
import { StatisticRepoProvider } from './statistic.persistence.provider';
import { StatisticRepository } from './statistic.repository';

@Module({
    imports: [ServicesModule],
    providers: [StatisticRepoProvider, StatisticRepository],
    exports: [StatisticRepoProvider, StatisticRepository],
})
export class StatisticRepositoryModule {}
