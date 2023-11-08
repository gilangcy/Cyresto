import { Module } from '@nestjs/common';
import { MenuController } from './controllers/menu/menu.controller';
import { MenuService } from './services/menu/menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuEntity } from './entities/menu.entity/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
