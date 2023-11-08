import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './modules/merchant/merchant.module';
import { MenuModule } from './modules/menu/menu.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    'type':'postgres',
    'host':process.env.DATABASE_HOST,
    'port':5432,
    'username':process.env.DATABASE_USERNAME,
    'password':process.env.DATABASE_PASSWORD,
    'database': 'postgres',
    'entities':['dist/**/**/*.entity{.js,.ts}'],
    'synchronize':true
  }),MerchantModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
