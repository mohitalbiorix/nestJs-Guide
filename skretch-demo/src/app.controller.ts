import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hello")
  getHii() {
    return "Hi There";
  }

  @Get("/buy")
  getBuy() {
    return "Buy There";
  }
}
