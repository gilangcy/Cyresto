import { Module } from '@nestjs/common';
import { MerchantController } from './controllers/merchant.controller';

@Module({
  controllers: [MerchantController]
})
export class MerchantModule {}
