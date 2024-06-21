import { Injectable } from '@nestjs/common';
import axios from 'axios';

const url = 'https://jspreadsheet.com/docs';
const regex = /'([^']+)';/;
@Injectable()
export class ScrapingJsdocCerService {
  async fetchJsonDocKeyCer() {
    try {
      let response = await axios.get(url);
      const htmlString = response.data;
      const match = htmlString.match(regex);
      if (match) {
        const licenseKey = match[1];
        return { status: 'success', licenseKey: licenseKey };
      } else {
        return { status: 'error', errMsg: 'License key not found.' };
      }
    } catch (error) {
      return { status: 'error', errMsg: 'Something went wrong.' };
    }
  }
}
