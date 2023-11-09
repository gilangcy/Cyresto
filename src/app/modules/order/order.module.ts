import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order/order.controller';
import { CartService } from './services/cart/cart.service';

@Module({
  controllers: [OrderController],
  providers: [CartService]
})
export class OrderModule {}
