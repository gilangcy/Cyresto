import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './modules/merchant/merchant.module';
import { MenuModule } from './modules/menu/menu.module';

@Module({
  imports: [MerchantModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
