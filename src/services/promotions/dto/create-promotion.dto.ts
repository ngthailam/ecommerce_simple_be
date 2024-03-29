import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class CreatePromotionDto {
    @IsPositive()
    @IsNumber()
    @ApiProperty({ default: 3 })
    quantity: number;

    @IsNumber()
    @ApiProperty({ default: 2 })
    templateId: number;
}
