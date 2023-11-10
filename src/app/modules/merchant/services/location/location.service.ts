import { Injectable } from '@nestjs/common';
import { MerchantEntity } from '../../entities/merchant.entity/merchant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { MerchantDto } from '../../dtos/merchant.dto/merchant.dto';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(MerchantEntity)
        private merchantRepository : Repository<MerchantEntity>
    ){}

    create(merchant: MerchantDto): Promise<MerchantDto> {
        return this.merchantRepository.save(merchant);
    }

    findAll():Promise<MerchantDto[]>{
        return this.merchantRepository.find();
    }
    
    findOne(id:number):Promise<MerchantDto>{
        return this.merchantRepository.findOneBy({
            id: id});
    }

    delete(id:number): Promise<DeleteResult>{
        return this.merchantRepository.delete(id)
    }
}
