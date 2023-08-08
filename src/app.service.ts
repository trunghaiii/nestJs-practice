import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    // code the logic and querry with DB(Model)
    return 'Hello World With Hai Trannnn!';
  }
}
