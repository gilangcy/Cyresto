import { Injectable } from '@nestjs/common';
import { CartDto } from '../../dtos/cart.dto/cart.dto';

@Injectable()
export class CartService {
    public carts  = new Map<number, CartDto>()

    create(cart:CartDto):CartDto{
        if (this.carts.has(cart.menu_id)){
            const oldCart = this.carts.get(cart.menu_id)
            const updatedCart = {
                menu_id : oldCart.menu_id,
                name: oldCart.name,
                count : oldCart.count + cart.count
            }
            this.carts.set(updatedCart.menu_id,updatedCart)
            return updatedCart
        }
        else{
            this.carts.set(cart.menu_id,cart)
            return cart
        }
        
    }

    findAll(): [Object,number] {
        const cartObject = {};
        this.carts.forEach((value, key) => {
            cartObject[key] = value;
        });
        return [cartObject, this.carts.size]
    }

    edit(cart_id:number,newCart:CartDto):CartDto{
        const oldCart = this.carts.get(cart_id)
        const updatedCart = {
            menu_id : oldCart.menu_id,
            name: newCart.name,
            count : newCart.count
        }
        this.carts.set(updatedCart.menu_id,updatedCart)
        return updatedCart
    }

    delete(cartId:number) : boolean{
        if (this.carts.has(cartId)) {
            this.carts.delete(cartId);
            return true
          } else {
            return false
          }
    }

    empty():void{
        this.carts.clear()
    }
}
