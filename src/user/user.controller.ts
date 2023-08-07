import { Controller, Get } from '@nestjs/common';

@Controller("/user")
export class UserController {

  @Get()
  getAllUser(): string {
    return "Get All Users"
  }

  @Get("userId")
  getUserById(): string {
    return "Get User by ID"
  }
}
