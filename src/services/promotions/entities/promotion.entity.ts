import {
  DiscountType,
  PromotionType,
} from 'src/services/promotion_templates/entities/promotion_template.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'promotions' })
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column({
    type: 'enum',
    enum: PromotionType,
    nullable: false,
  })
  type: PromotionType;

  @Column({
    name: 'max_amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
  })
  maxAmount?: number;

  @Column({
    name: 'discount_type',
    type: 'enum',
    enum: DiscountType,
    nullable: false,
  })
  discountType: DiscountType;

  @Column({
    name: 'discount_amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  discountAmount?: number;
}
