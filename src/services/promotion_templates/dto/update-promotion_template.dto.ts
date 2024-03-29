import { PartialType } from '@nestjs/mapped-types';
import { CreatePromotionTemplateDto } from './create-promotion_template.dto';

export class UpdatePromotionTemplateDto extends PartialType(CreatePromotionTemplateDto) {}
