import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PromotionType {
  product,
  shipping,
  order,
}

export enum DiscountType {
  fixed,
  percentage,
}

@Entity({ name: 'promotion_templates' })
export class PromotionTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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
