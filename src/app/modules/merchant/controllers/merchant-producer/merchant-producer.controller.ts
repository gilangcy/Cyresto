import { Body, Controller, Delete, Param, Post, Version } from '@nestjs/common';
import { MerchantDto } from '../../dtos/merchant.dto/merchant.dto';
import { LocationService } from '../../services/location/location.service';


@Controller('producer/merchant')
export class MerchantProducerController {
    constructor(private readonly LocationService: LocationService) {}

    @Version('1')
    @Post('/')
    async createMerchantLocation(@Body() merchant:MerchantDto): Promise<Object>{
        try{
            return await this.LocationService.create(merchant);
        }
        catch(error){
            return {
                "error": {
                    "code": error.code,
                    "message": error.name,
                    "details": error.message
                } 
            }
        }
    }

    @Version('1')
    @Delete(':merchant_id')
    deleteMerchantLocation(@Param() params:any) : Promise<Object>{
        return this.LocationService.delete(params.merchant_id)
    }
}

