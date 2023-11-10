import { Body, Controller, Get, Param, Post, Version } from '@nestjs/common';
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
    @Get(':menu_id')
    async getMenu(@Param() params:any) : Promise<Object>{
        const menuInformation = await this.MenuService.findOne(params.menu_id)
        if (menuInformation != null ){
            return menuInformation
        }
        else {
            return {
                "error": {
                    "code": "404",
                    "message": "The requested menu was not found",
                    "details": `Menu with ID ${ params.menu_id } was not found in the database.`
                } 
            }
        }
    }
}

