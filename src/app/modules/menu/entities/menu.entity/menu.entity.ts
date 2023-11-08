import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
