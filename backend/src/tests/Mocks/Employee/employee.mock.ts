import {
    Departments,
    DEPARTMENTS_COUNT,
    MAX_SALARY,
    MIN_SALARY,
} from '../../../Utils/constants';

import { v4 as uuidv4 } from 'uuid';
import { EmployeeDAO } from 'src/Domain/Employee/DAOs/employee';

export const employeeMock: Array<EmployeeDAO> = [
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
    {
        employeeId: uuidv4(),
        department: Departments[Math.floor(Math.random() * DEPARTMENTS_COUNT)],
        salary: Math.floor(
            Math.random() * (MAX_SALARY - MIN_SALARY + 1) + MIN_SALARY,
        ),
    },
];
