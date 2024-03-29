import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './services/users/users.module';
import { OrdersModule } from './services/orders/orders.module';
import { ProductsModule } from './services/products/products.module';
import { PromotionTemplatesModule } from './services/promotion_templates/promotion_templates.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './services/users/entities/user.entity';
import { Product } from './services/products/entities/product.entity';
import { PromotionTemplate } from './services/promotion_templates/entities/promotion_template.entity';
import { PromotionsModule } from './services/promotions/promotions.module';
import { Promotion } from './services/promotions/entities/promotion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '',
      username: 'ntlam6',
      entities: [User, Product, PromotionTemplate, Promotion],
      database: 'ecommerce-simple',
      // dropSchema: true,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    OrdersModule,
    ProductsModule,
    PromotionTemplatesModule,
    PromotionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
