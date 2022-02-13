import { Module } from '@nestjs/common';
import { StatisticRepositoryModule } from 'src/Persistence/Statistic/statistic.repository.module';
import { StatisticService } from './statistic.service';

@Module({
    imports: [StatisticRepositoryModule],
    providers: [StatisticService],
    exports: [StatisticService],
})
export class StatisticModule {}
