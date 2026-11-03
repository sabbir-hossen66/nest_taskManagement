import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsIn([true,false])
    isCompleted: true | false;
}
