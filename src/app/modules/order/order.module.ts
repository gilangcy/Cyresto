import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order/order.controller';
import { CartService } from './services/cart/cart.service';
import { OrderService } from './services/order/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity/order.entity';
import { OrderItemEntity } from './entities/order-item.entity/order-item.entity';
import { MenuEntity } from '../menu/entities/menu.entity/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity,OrderItemEntity,MenuEntity])],
  controllers: [OrderController],
  providers: [CartService, OrderService]
})
export class OrderModule {}
