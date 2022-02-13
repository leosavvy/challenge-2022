import { IsNumber, IsEnum } from 'class-validator';
import { Departments } from 'src/Utils/constants';

export class CreateEmployeeDTO {
    @IsEnum(Departments)
    department: string;
    @IsNumber()
    salary: number;
}
