import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../../entities/order.entity/order.entity';
import { OrderDto } from '../../dtos/order.dto/order.dto';
import { CartDto } from '../../dtos/cart.dto/cart.dto';
import { OrderItemDto } from '../../dtos/order-item.dto/order-item.dto';
import { OrderItemEntity } from '../../entities/order-item.entity/order-item.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private OrderRepository : Repository<OrderEntity>,

        @InjectRepository(OrderItemEntity)
        private OrderItemRepository : Repository<OrderItemEntity>
    ){}

    create(order: OrderDto): Promise<OrderDto> {
           return this.OrderRepository.save(order);
    }

    addItem(order: CartDto , order_id:number): Promise<OrderItemDto>{
        const orderItem = new OrderItemEntity()
        orderItem.order.id = order_id
        orderItem.menu.id = order.id
        orderItem.count = order.count
        return this.OrderItemRepository.save(orderItem)
    }

    findAll():Promise<OrderDto[]>{
        return this.OrderRepository.find({
            // select:{
            // id:true,
            // total_amount:true,
            // orderItems:{
            //     count:true,
            //     menu:{
            //         name:true
            //     }

            // }
            // },
            relations:{
                orderItems:{
                        menu:true,
                }
            },
        })
    }
}
    
