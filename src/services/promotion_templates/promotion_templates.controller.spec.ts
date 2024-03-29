import { Test, TestingModule } from '@nestjs/testing';
import { PromotionTemplatesController } from './promotion_templates.controller';
import { PromotionTemplatesService } from './promotion_templates.service';

describe('PromotionTemplatesController', () => {
  let controller: PromotionTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromotionTemplatesController],
      providers: [PromotionTemplatesService],
    }).compile();

    controller = module.get<PromotionTemplatesController>(PromotionTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
