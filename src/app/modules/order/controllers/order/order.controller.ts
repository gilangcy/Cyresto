import { Body, Controller, Delete, Get, Param, Post, Put, Version } from '@nestjs/common';
import { CartService } from '../../services/cart/cart.service';
import { CartDto } from '../../dtos/cart.dto/cart.dto';
import { OrderDto } from '../../dtos/order.dto/order.dto';
import { OrderService } from '../../services/order/order.service';

@Controller('consumer/order')
export class OrderController {
    constructor(
        private readonly CartService: CartService,
        private readonly OrderService: OrderService
        ) {}

    @Version('1')
    @Get('cart')
    getAllItemCart() :object{
        return this.CartService.findAll()
    }

    @Version('1')
    @Post('cart')
    AddCartItem(@Body() cart:CartDto): CartDto{
        return this.CartService.create(cart);
        
    }

    @Version('1')
    @Put('cart/:id/')
    EditCartItem(@Param() params:any,@Body() cart:CartDto): CartDto{
        return this.CartService.edit(parseInt(params.id),cart);
        
    }

    @Version('1')
    @Delete('cart/:id/')
    DeleteCartItem(@Param() params:any) : boolean{
        return this.CartService.delete(parseInt(params.id))
    }


    @Version('1')
    @Post('checkout')
    async checkout(): Promise<OrderDto>{
        const cartObject = this.CartService.findAll()
        return this.OrderService.checkout(cartObject)
    }

    @Version('1')
    @Get('/')
    getAllOrder() : Promise<OrderDto[]>{
        return this.OrderService.findAll()
    }

}

