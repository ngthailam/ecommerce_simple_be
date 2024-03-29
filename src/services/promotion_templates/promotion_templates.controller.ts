import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromotionTemplatesService } from './promotion_templates.service';
import { CreatePromotionTemplateDto } from './dto/create-promotion_template.dto';
import { UpdatePromotionTemplateDto } from './dto/update-promotion_template.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('promotion-templates')
@ApiTags('Promotion Templates')
export class PromotionTemplatesController {
  constructor(
    private readonly promotionTemplatesService: PromotionTemplatesService,
  ) {}

  @Post()
  create(@Body() createPromotionTemplateDto: CreatePromotionTemplateDto) {
    return this.promotionTemplatesService.create(createPromotionTemplateDto);
  }

  @Get()
  findAll() {
    return this.promotionTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionTemplatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePromotionTemplateDto: UpdatePromotionTemplateDto,
  ) {
    return this.promotionTemplatesService.update(
      +id,
      updatePromotionTemplateDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionTemplatesService.remove(+id);
  }
}
