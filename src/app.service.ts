import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {
    console.log('constructor');
    console.log(process.env.DATABASE_URL);
    console.log(this.configService.get('databaseurl'));

  }
  getHello(): string {
    console.log('getHello');
    console.log(process.env.DATABASE_URL);
    console.log(this.configService.get('DATABASE_URL'));
    return 'URL: ' + process.env.DATABASE_URL;
  }
}
