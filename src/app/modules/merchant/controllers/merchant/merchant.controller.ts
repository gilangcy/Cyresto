import {  Controller, Get, Param, Version } from '@nestjs/common';
import { LocationService } from '../../services/location/location.service';
import { MerchantDto } from '../../dtos/merchant.dto/merchant.dto';

@Controller("consumer/merchant")
export class MerchantController {
    constructor(private readonly LocationService: LocationService) {}

    @Version('1')
    @Get('location')
    getAllMerchantLocation() : Promise<MerchantDto[]>{
        return this.LocationService.findAll()
    }

    @Version('1')
    @Get(':merchant_id/location')
    async getMerchantDetailLocation(@Param() params:any) : Promise<Object>{
        const merchantLocation = await this.LocationService.findOne(params.merchant_id)
        if (merchantLocation != null ){
            return merchantLocation
        }
        else {
            return {
                "error": {
                    "code": "404",
                    "message": "The requested merchant was not found",
                    "details": `Merchant with ID ${ params.merchant_id } was not found in the database.`
                } 
            }
        }
    }
}

