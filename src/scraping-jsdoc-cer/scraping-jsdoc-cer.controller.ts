import { Controller, Get } from '@nestjs/common';
import { ScrapingJsdocCerService } from './scraping-jsdoc-cer.service';

@Controller('scraping-jsdoc-cer')
export class ScrapingJsdocCerController {
  constructor(private scrapingJSDocCerService: ScrapingJsdocCerService) {}
  @Get()
  getJsonDocKeyCer() {
    return this.scrapingJSDocCerService.fetchJsonDocKeyCer();
  }
}
