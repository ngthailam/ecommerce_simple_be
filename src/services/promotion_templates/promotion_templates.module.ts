import { Module } from '@nestjs/common';
import { PromotionTemplatesService } from './promotion_templates.service';
import { PromotionTemplatesController } from './promotion_templates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionTemplate } from './entities/promotion_template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PromotionTemplate])],
  controllers: [PromotionTemplatesController],
  exports: [TypeOrmModule],
  providers: [PromotionTemplatesService],
})
export class PromotionTemplatesModule {}
