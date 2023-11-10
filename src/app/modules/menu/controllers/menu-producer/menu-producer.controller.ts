import { Body, Controller, Delete, Param, Post, Version } from '@nestjs/common';
import { MenuDto } from '../../dtos/menu.dto/menu.dto';
import { MenuService } from '../../services/menu/menu.service';

@Controller('producer/menu')
export class MenuProducerController {
    constructor(private readonly MenuService: MenuService) {}

    @Version('1')
    @Post('/')
    async createMenu(@Body() menu:MenuDto): Promise<Object>{
        try{
            return await this.MenuService.create(menu);
        }
        catch(error){
            return {
                "error": {
                    "code": error.code,
                    "message": error.name,
                    "details": error.message
                } 
            }
        }
    }
    
    @Version('1')
    @Delete(':menu_id')
    deleteMenu(@Param() params:any) : Promise<Object>{
        return this.MenuService.delete(params.menu_id)
    }
}
