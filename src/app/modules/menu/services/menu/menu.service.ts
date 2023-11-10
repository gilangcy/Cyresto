import { Injectable } from '@nestjs/common';
import { MenuEntity } from '../../entities/menu.entity/menu.entity';
import { MenuDto } from '../../dtos/menu.dto/menu.dto';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(MenuEntity)
        private MenuRepository : Repository<MenuEntity>
    ){}

    create(order: MenuDto): Promise<MenuDto> {
        return this.MenuRepository.save(order);
    }

    findAll():Promise<MenuDto[]>{
        return this.MenuRepository.find();
    }
    
    findOne(id:number):Promise<MenuDto>{
        return this.MenuRepository.findOneBy({
            id:id});
    }

    delete(id:number): Promise<DeleteResult>{
        return this.MenuRepository.delete(id)
    }
}
