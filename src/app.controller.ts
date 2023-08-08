import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from "@nestjs/config"

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(private configService: ConfigService) { }

  @Get()
  processHomePage() {

    return this.configService.get<string>('PORT')
  }
}
