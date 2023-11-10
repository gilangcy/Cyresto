import { Test, TestingModule } from '@nestjs/testing';
import { MerchantProducerController } from './merchant-producer.controller';

describe('MerchantProducerController', () => {
  let controller: MerchantProducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchantProducerController],
    }).compile();

    controller = module.get<MerchantProducerController>(MerchantProducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
