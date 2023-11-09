import { OrderItemEntity } from "src/app/modules/order/entities/order-item.entity/order-item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MenuEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:'name',nullable:false})
    name:string

    @Column({name:'price',nullable:false})
    price:number

    @Column({name:'image',nullable:true})
    image:string

    @Column({name:'description',nullable:false})
    description:string

    @Column({name:'isAvailable',nullable:false})
    isAvailable:boolean

    @OneToMany(() => OrderItemEntity, orderItem => orderItem.menu)
    orderItems : OrderItemEntity[];
}
