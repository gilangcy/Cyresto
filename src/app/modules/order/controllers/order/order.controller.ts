import { Body, Controller, Delete, Get, Param, Post, Version } from '@nestjs/common';
import { CartService } from '../../services/cart/cart.service';
import { CartDto } from '../../dtos/cart.dto/cart.dto';
import { OrderDto } from '../../dtos/order.dto/order.dto';
import { OrderService } from '../../services/order/order.service';
import { OrderItemDto } from '../../dtos/order-item.dto/order-item.dto';

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
    @Delete('cart')
    DeleteCartItem() : boolean{
        return this.CartService.delete()
    }

    @Version('1')
    @Get('checkout')
    checkout(): boolean{
        const cartObject = this.CartService.findAll()
        for (let item in cartObject){
            console.log(cartObject)
            console.log(item)
            console.log(cartObject[0])
        }
        return true
        // try{
        //     const createdOrder = await this.OrderService.create({
        //         id:null,
        //         orderItems :[],
        //         total_amount:0
        //     })
        //     const orderId = createdOrder.id
            
        //     // for (let item in cartObject) {
        //     //     this.OrderService.addItem({
        //     //         id: 0,
        //     //         name: '',
        //     //         count: 0
        //     //     },orderId)
        //     // }
        //     console.log()
        //     return true
        // }
        // catch (error) {
        //     // Handle errors if the promise is rejected
        //     console.error('An error occurred:', error);
        //     return false
        // }
            
        
        
    }

    @Version('1')
    @Get('/')
    getAllOrder() : Promise<OrderDto[]>{
        return this.OrderService.findAll()
    }

    // @Version('1')
    // @Get(':merchant_name/location')
    // getMerchantDetailLocation(@Param() params:any) : Promise<MerchantDto>{
    //     return this.CartService.findOne(params.merchant_name)
    // }
}

