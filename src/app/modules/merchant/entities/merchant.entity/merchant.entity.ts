import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MerchantEntity {
    @PrimaryColumn({unique: true,name:'name',nullable:false})
    name:string;

    @Column({name:'longitude',nullable:false,type: 'real'})
    longitude:string;

    

    @Column({name:'latitude',nullable:false,type: 'real'})
    latitude:string;
}
