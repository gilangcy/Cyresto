import { Test, TestingModule } from '@nestjs/testing';
import { MenuProducerController } from './menu-producer.controller';

describe('MenuProducerController', () => {
  let controller: MenuProducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuProducerController],
    }).compile();

    controller = module.get<MenuProducerController>(MenuProducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
