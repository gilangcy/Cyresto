import { Body, Controller, Get, Param, Post, Version } from '@nestjs/common';
import { LocationService } from '../services/location/location.service';
import { MerchantDto } from '../dtos/merchant.dto/merchant.dto';

@Controller("consumer/merchant")
export class MerchantController {
    constructor(private readonly LocationService: LocationService) {}

    @Version('1')
    @Get('location')
    getAllMerchantLocation() : Promise<MerchantDto[]>{
        return this.LocationService.findAll()
    }

    @Version('1')
    @Post('/')
    createMerchantLocation(@Body() merchant:MerchantDto): Promise<MerchantDto>{
        return this.LocationService.create(merchant);
    }

    @Version('1')
    @Get(':merchant_name/location')
    getMerchantDetailLocation(@Param() params:any) : Promise<MerchantDto>{
        return this.LocationService.findOne(params.merchant_name)
    }
}

