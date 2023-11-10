import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "../order.entity/order.entity";
import { MenuEntity } from "src/app/modules/menu/entities/menu.entity/menu.entity";

@Entity()
export class OrderItemEntity {

@PrimaryGeneratedColumn()
id:number

@ManyToOne(() => MenuEntity, menu => menu.orderItems,{onDelete: "CASCADE", onUpdate: "CASCADE"})
menu :MenuEntity

@ManyToOne(() => OrderEntity, order => order.orderItems,{onDelete: "CASCADE", onUpdate: "CASCADE"})
order : OrderEntity

@Column({name:'count',nullable:false})
count:number;
    orderItem: Promise<OrderEntity>;
}

