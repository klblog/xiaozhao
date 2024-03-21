import { Get, Post, Body, Req, Res, HttpStatus, HttpException, Controller } from '@nestjs/common';
import { Request, Response } from 'express';
import { env } from 'src/config/host';
import { HomeService } from 'src/services/home.service';


@Controller({ host: env.base, path: '/api/home' })
export class HomeController {
  constructor(private readonly homeService : HomeService) {}

  @Get('/detail')
  async getDetail(@Req() req: Request) {
    const res = this.homeService.getHomeDetailMd()
    return res
  }
}