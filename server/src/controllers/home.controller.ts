import { Get, Post, Body, Req, Res, HttpStatus, HttpException, Controller } from '@nestjs/common';
import { Request, Response } from 'express';
import { env } from 'src/config/host';
import { IHomeNavigationOptions, IhomeOptions } from 'src/interface/home';
import { HomeService } from 'src/services/home.service';


@Controller({ host: env.base, path: '/api/home' })
export class HomeController {
  constructor(private readonly homeService : HomeService) {}

  // ---- 装饰内容 ----

  @Get('/decorate/detail')
  async getDetail(@Req() req: Request) {
    const res = this.homeService.getHomeDetailMd()
    return res
  }

  @Post('/decorate/detailSetting')
  async setDetail(@Body() body: IhomeOptions) {
    const res  = this.homeService.setHomeDetailMd(body)
    return res
  }
  // ---- 装饰内容  ----

  // ---- 导航栏、公告 ----
  @Get('/navigation/item')
  async getNavItem(@Req() req: Request) {
    const res = this.homeService.getHomeNavItem()
    return res
  }

  @Post('/navigation/itemSetting')
  async setNavItem(@Body() body: IHomeNavigationOptions) {
    const res = this.homeService.setHomeNavItem(body)
    return res
  }
  // ---- 导航栏、公告 ----
}