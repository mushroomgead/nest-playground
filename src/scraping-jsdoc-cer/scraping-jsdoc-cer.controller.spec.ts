import { Test, TestingModule } from '@nestjs/testing';
import { ScrapingJsdocCerController } from './scraping-jsdoc-cer.controller';

describe('ScrapingJsdocCerController', () => {
  let controller: ScrapingJsdocCerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScrapingJsdocCerController],
    }).compile();

    controller = module.get<ScrapingJsdocCerController>(ScrapingJsdocCerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
