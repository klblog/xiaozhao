import { Get, Post, Body, Req, Res, HttpStatus, HttpException, Controller } from '@nestjs/common';
import { Request, Response } from 'express';
import { env } from 'src/config/host';
import { ReleaseService } from 'src/services/release.service';


@Controller({ host: env.base, path: '/api/release' })
export class ReleaseController {
  constructor(private readonly releaseService : ReleaseService) {}


  @Get('/vuepress')
  async releaseVuepress(@Req() req: Request) {
    const res = this.releaseService.releaseVuepress()
    return res
  }
}