import { Module } from '@nestjs/common';
import { ScrapingJsdocCerModule } from './scraping-jsdoc-cer/scraping-jsdoc-cer.module';

@Module({
  imports: [ScrapingJsdocCerModule],
})
export class AppModule {}
