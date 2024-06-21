import { Module } from '@nestjs/common';
import { ScrapingJsdocCerService } from './scraping-jsdoc-cer.service';
import { ScrapingJsdocCerController } from './scraping-jsdoc-cer.controller';

@Module({
  controllers: [ScrapingJsdocCerController],
  providers: [ScrapingJsdocCerService],
})
export class ScrapingJsdocCerModule {}
