import { Module } from '@nestjs/common';
import { MenuController } from './controllers/menu/menu.controller';
import { MenuService } from './services/menu/menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuEntity } from './entities/menu.entity/menu.entity';
import { MenuProducerController } from './controllers/menu-producer/menu-producer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController, MenuProducerController],
  providers: [MenuService]
})
export class MenuModule {}
