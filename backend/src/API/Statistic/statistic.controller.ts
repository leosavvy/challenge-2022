import { Controller, Get, HttpException } from '@nestjs/common';
import { errorHandler } from '../util/error-handler';
import {
    HealthStatuses,
    HealthStatusResponse,
} from 'src/Utils/Health/health-statuses';
import { StatisticService } from 'src/Domain/Statistic/statistic.service';
import { StatisticDAO } from 'src/Domain/Statistic/DAOs/statistic.dao';

@Controller('statistic')
export class StatisticController {
    constructor(private readonly statisticService: StatisticService) {}

    @Get('/')
    async getAllStatistics(): Promise<Array<StatisticDAO> | HttpException> {
        try {
            return await this.statisticService.getStatisticByDepartment();
        } catch (error) {
            return errorHandler(error);
        }
    }

    @Get('/health/check')
    async healthCheck(): Promise<HealthStatusResponse> {
        try {
            await this.statisticService.getStatisticByDepartment();
            return { status: HealthStatuses.Healthy };
        } catch (error) {
            return { status: HealthStatuses.Unhealthy };
        }
    }
}
