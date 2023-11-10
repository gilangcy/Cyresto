import { Module } from '@nestjs/common';
import { MerchantController } from './controllers/merchant/merchant.controller';
import { LocationService } from './services/location/location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantEntity } from './entities/merchant.entity/merchant.entity';
import { MerchantProducerController } from './controllers/merchant-producer/merchant-producer.controller';


@Module({
  imports: [TypeOrmModule.forFeature([MerchantEntity])],
  controllers: [MerchantController, MerchantProducerController],
  providers: [LocationService]
})
export class MerchantModule {}
