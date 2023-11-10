import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItemEntity } from "../order-item.entity/order-item.entity";

@Entity()
export class OrderEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @OneToMany(() => OrderItemEntity, orderItem => orderItem.order)
    orderItems : OrderItemEntity[];
    
    @Column({name:'total_amount',nullable:true})
    total_amount:number;
}
