import { Body, Controller, Get, Param, Post, Version } from '@nestjs/common';
import { CartService } from '../../services/cart/cart.service';
import { CartDto } from '../../dtos/cart.dto/cart.dto';

@Controller('consumer/order')
export class OrderController {
    constructor(private readonly CartService: CartService) {}

    @Version('1')
    @Get('cart')
    getAllMerchantLocation() : CartDto[]{
        return this.CartService.findAll()
    }

    @Version('1')
    @Post('cart')
    createMerchantLocation(@Body() cart:CartDto): CartDto{
        return this.CartService.create(cart);
    }

    // @Version('1')
    // @Get(':merchant_name/location')
    // getMerchantDetailLocation(@Param() params:any) : Promise<MerchantDto>{
    //     return this.CartService.findOne(params.merchant_name)
    // }
}
