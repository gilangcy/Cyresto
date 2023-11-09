import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MerchantEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique: true,name:'name',nullable:false})
    name:string;

    @Column({name:'longitude',nullable:false,type: 'real'})
    longitude:string;

    

    @Column({name:'latitude',nullable:false,type: 'real'})
    latitude:string;
}
