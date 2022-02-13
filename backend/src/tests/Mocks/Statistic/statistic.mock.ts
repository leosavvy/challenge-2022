import { StatisticDAO } from 'src/Domain/Statistic/DAOs/statistic.dao';

export const statisticMock: Array<StatisticDAO> = [
    {
        department: 'IT',
        maxSalary: 2000,
        minSalary: 1000,
        avgSalary: 1500,
    },
    {
        department: 'Marketing',
        maxSalary: 1500,
        minSalary: 1000,
        avgSalary: 1300,
    },
];
