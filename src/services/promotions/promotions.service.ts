import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Promotion } from './entities/promotion.entity';
import { Repository } from 'typeorm';
import { PromotionTemplate } from '../promotion_templates/entities/promotion_template.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionRepository: Repository<Promotion>,
    @InjectRepository(PromotionTemplate)
    private readonly promotionTemplateRepository: Repository<PromotionTemplate>,
  ) {}

  async create(createPromotionDto: CreatePromotionDto) {
    // get template
    const promotionTemplate: PromotionTemplate =
      await this.promotionTemplateRepository.findOneBy({
        id: createPromotionDto.templateId,
      });

    if (!promotionTemplate) {
      throw new HttpException(
        `Promotion template with id ${createPromotionDto.templateId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    const promotions: Promotion[] = [];

    for (let i = 0; i < createPromotionDto.quantity; i++) {
      const promotion = new Promotion();
      promotion.code = uuidv4();
      promotion.type = promotionTemplate.type;

      promotions.push(promotion);
    }

    return this.promotionRepository.insert(promotions);
  }

  findAll() {
    return this.promotionRepository.find();
  }

  findOne(id: number) {
    return this.promotionRepository.findOneBy({ id });
  }

  update(id: number, updatePromotionDto: UpdatePromotionDto) {
    return `This action updates a #${id} promotion`;
  }

  remove(id: number) {
    return this.promotionRepository.delete(id);
  }
}
