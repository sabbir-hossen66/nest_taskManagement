import { IsIn, IsOptional, } from "class-validator";

export class FilterTsksQueryDtoTs {
    @IsOptional()
    id?: string;
    @IsOptional()
    title?: string;
    @IsOptional()
    @IsIn([true,false])
    isCompleted?: string
}
