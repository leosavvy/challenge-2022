import { IsNumber, IsEnum, IsNotEmpty } from 'class-validator';
import { Departments } from 'src/Utils/constants';

export class CreateEmployeeDTO {
    @IsNotEmpty({ message: 'The field department is required' })
    @IsEnum(Departments)
    department: string;
    @IsNotEmpty({ message: 'The field salary is required' })
    @IsNumber()
    salary: number;
}
