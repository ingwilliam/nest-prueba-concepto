import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'URL: ' + process.env.DATABASE_URL;
  }
}
