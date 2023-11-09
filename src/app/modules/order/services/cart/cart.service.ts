import { Injectable } from '@nestjs/common';
import { CartDto } from '../../dtos/cart.dto/cart.dto';

@Injectable()
export class CartService {
    public carts  = new Map<string, CartDto>()

    create(cart:CartDto):CartDto{
        console.log(cart.name)
        console.log(this.carts)
        this.carts.forEach((value: CartDto, key: string) => {
            console.log(key, value);
        });
        console.log(this.carts.has(cart.name))
        if (this.carts.has(cart.name)){
            const oldCart = this.carts.get(cart.name)
            const updatedCart = {
                id : oldCart.id,
                name: oldCart.name,
                count : oldCart.count + cart.count
            }
            this.carts.set(updatedCart.name,updatedCart)
        }
        else{
            this.carts.set(cart.name,cart)
        }
        return cart
    }

    findAll(): Object {
        console.log(this.carts)
        const cartObject = {};
        this.carts.forEach((value, key) => {
            cartObject[key] = value;
        });
        return cartObject;
    }

    delete() : boolean{
        return true;
    }
}
