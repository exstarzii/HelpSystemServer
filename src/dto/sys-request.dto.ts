import { IsString, IsInt } from 'class-validator';
export class SysRequestDto {
    @IsString()
    name: string;
    @IsInt()
    designer_id: number;
}
