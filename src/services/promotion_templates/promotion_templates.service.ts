import { Injectable } from '@nestjs/common';
import { CreatePromotionTemplateDto } from './dto/create-promotion_template.dto';
import { UpdatePromotionTemplateDto } from './dto/update-promotion_template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  PromotionTemplate,
  PromotionType,
} from './entities/promotion_template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromotionTemplatesService {
  constructor(
    @InjectRepository(PromotionTemplate)
    private readonly promotionTemplateRepository: Repository<PromotionTemplate>,
  ) {}

  create(createPromotionTemplateDto: CreatePromotionTemplateDto) {
    const template = new PromotionTemplate();
    template.name = createPromotionTemplateDto.name;
    template.type = createPromotionTemplateDto.type;
    return this.promotionTemplateRepository.save(template);
  }

  findAll() {
    return this.promotionTemplateRepository.find();
  }

  findOne(id: number): Promise<PromotionTemplate | null> {
    return this.promotionTemplateRepository.findOneBy({ id });
  }

  update(id: number, updatePromotionTemplateDto: UpdatePromotionTemplateDto) {
    return `This action updates a #${id} promotionTemplate`;
  }

  remove(id: number) {
    return this.promotionTemplateRepository.delete(id);
  }
}
