import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../../entities/order.entity/order.entity';
import { OrderDto } from '../../dtos/order.dto/order.dto';
import { CartDto } from '../../dtos/cart.dto/cart.dto';
import { OrderItemEntity } from '../../entities/order-item.entity/order-item.entity';
import { MenuEntity } from 'src/app/modules/menu/entities/menu.entity/menu.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private OrderRepository : Repository<OrderEntity>,

        @InjectRepository(OrderItemEntity)
        private OrderItemRepository : Repository<OrderItemEntity>,

        @InjectRepository(MenuEntity)
        private MenuRepository : Repository<MenuEntity>
    ){}

    create(order: OrderDto): Promise<OrderDto> {
           return this.OrderRepository.save(order);
    }

    async addItem(order: CartDto , order_id:number): Promise<number>{
        const orderItem = new OrderItemEntity()
        const orderEntity = await this.OrderRepository.findOne({where:{
            id:order_id}})
        const menuEntity = await this.MenuRepository.findOne({where:{
            id:order.id}})
    
        orderItem.order = orderEntity
        orderItem.menu = menuEntity
        orderItem['count'] = order.count
        let amount = orderItem.menu.price * order.count
        this.OrderItemRepository.save(orderItem)
        return amount
    }

    async checkout(cartObject:Object): Promise<OrderDto>{
            const createdOrder = await this.create({
                id:null,
                orderItems :[],
                total_amount:0
            })
            const orderId = createdOrder.id
            let total_amount = 0
            for (let item in cartObject) {
                total_amount += await this.addItem(cartObject[item],orderId)
            }
            const existingOrder = await this.OrderRepository.findOne({where:{
                id:orderId}});
            
            const updatedOrder = this.OrderRepository.merge(existingOrder,{
                total_amount:total_amount
            })
            this.OrderRepository.save(updatedOrder)
            return updatedOrder
    }


    findAll():Promise<OrderDto[]>{
        return this.OrderRepository.find({
            relations:{
                orderItems:{
                        menu:true,
                }
            },
        })
    }
}
    
