import { Module } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promotion } from './entities/promotion.entity';
import { PromotionTemplatesModule } from '../promotion_templates/promotion_templates.module';

@Module({
  imports: [TypeOrmModule.forFeature([Promotion]), PromotionTemplatesModule],
  controllers: [PromotionsController],
  providers: [PromotionsService],
})
export class PromotionsModule {}
