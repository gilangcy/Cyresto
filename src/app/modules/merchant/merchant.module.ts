import { Module } from '@nestjs/common';
import { MerchantController } from './controllers/merchant.controller';
import { LocationService } from './services/location/location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantEntity } from './entities/merchant.entity/merchant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MerchantEntity])],
  controllers: [MerchantController],
  providers: [LocationService]
})
export class MerchantModule {}
