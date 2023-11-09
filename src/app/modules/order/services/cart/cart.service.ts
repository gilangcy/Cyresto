import { Injectable } from '@nestjs/common';
import { CartDto } from '../../dtos/cart.dto/cart.dto';

@Injectable()
export class CartService {
    public carts: CartDto[] = []
    create(cart:CartDto):CartDto{
        this.carts.push(cart);
        return cart;
    }

    findAll(): CartDto[] {
        return this.carts;
    }
}
