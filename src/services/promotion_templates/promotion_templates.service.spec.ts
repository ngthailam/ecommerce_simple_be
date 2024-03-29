import { Test, TestingModule } from '@nestjs/testing';
import { PromotionTemplatesService } from './promotion_templates.service';

describe('PromotionTemplatesService', () => {
  let service: PromotionTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromotionTemplatesService],
    }).compile();

    service = module.get<PromotionTemplatesService>(PromotionTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
