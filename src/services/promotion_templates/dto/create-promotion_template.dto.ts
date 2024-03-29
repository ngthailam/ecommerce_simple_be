import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PromotionType } from "../entities/promotion_template.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePromotionTemplateDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ default: 'Discount 50%' })
  name: string;

  @IsEnum(PromotionType)
  @ApiProperty({ default: PromotionType.product })
  type: PromotionType;
}
