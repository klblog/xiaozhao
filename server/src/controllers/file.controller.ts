import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { env } from '../config/host';
import { FileService } from '../services/file.service';

@Controller({ host: env.base, path: '/api'})
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('/blogs')
  async getFile(@Req() req: Request) {
    const res = this.fileService.getFileInjectable();
    return res
  }
}