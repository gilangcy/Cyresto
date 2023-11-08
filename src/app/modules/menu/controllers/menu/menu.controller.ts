import { Body, Controller, Get, Param, Post, Version } from '@nestjs/common';
import { MerchantDto } from 'src/app/modules/merchant/dtos/merchant.dto/merchant.dto';
import { MenuService } from '../../services/menu/menu.service';
import { MenuDto } from '../../dtos/menu.dto/menu.dto';

@Controller('consumer/menu')
export class MenuController {
    constructor(private readonly MenuService: MenuService) {}

    @Version('1')
    @Get('/')
    getAllMenu() : Promise<MenuDto[]>{
        return this.MenuService.findAll()
    }

    @Version('1')
    @Post('/')
    createMerchantLocation(@Body() merchant:MenuDto): Promise<MenuDto>{
        return this.MenuService.create(merchant);
    }

    @Version('1')
    @Get('menu/:id/')
    getMerchantDetailLocation(@Param() params:any) : Promise<MenuDto>{
        return this.MenuService.findOne(params.id)
    }
}

