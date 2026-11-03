
import { IsBoolean, IsIn, IsOptional, IsString, } from "class-validator";

export class UpdateTasksDto {
    @IsOptional()
    @IsString()
    title?: string;
    @IsOptional()
    @IsString()
    description?: string;
    @IsBoolean()
    isCompleted?: boolean;
}
