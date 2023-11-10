import { OrderItemDto } from "../order-item.dto/order-item.dto"

export class OrderDto {
    id:number
    orderItems: OrderItemDto[]
    total_amount:number
}

