import { Test, TestingModule } from '@nestjs/testing';
import { ScrapingJsdocCerService } from './scraping-jsdoc-cer.service';

describe('ScrapingJsdocCerService', () => {
  let service: ScrapingJsdocCerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrapingJsdocCerService],
    }).compile();

    service = module.get<ScrapingJsdocCerService>(ScrapingJsdocCerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
