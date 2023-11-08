import { Injectable } from '@nestjs/common';
import { MerchantEntity } from '../../entities/merchant.entity/merchant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MerchantDto } from '../../dtos/merchant.dto/merchant.dto';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(MerchantEntity)
        private merchantRepository : Repository<MerchantEntity>
    ){}

    create(order: MerchantDto): Promise<MerchantDto> {
        return this.merchantRepository.save(order);
    }

    findAll():Promise<MerchantDto[]>{
        return this.merchantRepository.find();
    }
    
    findOne(merchant_name:string):Promise<MerchantDto>{
        return this.merchantRepository.findOneBy({
            name: merchant_name});
    }
}
