import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { env } from '../config/host';
import { FileService } from '../services/file.service';
import type  { ICreateFileOptions } from 'src/interface/file';
import { IFileStatus } from 'src/enums/file';

@Controller('/api/blogs')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('/list')
  async getFile( @Req() req: Request) {
    const res = this.fileService.getFileInjectable();
    return res
  }
  
  /** 创建、删除、修改文件夹 */
  @Post('/create/folder')
  async createFolder(@Body() body, @Req() req: Request) {
    const bodyKeys = Object.keys(body)
    if (bodyKeys.length !== 2 || !bodyKeys.includes('originName') || !bodyKeys.includes('newName')) {
      throw new HttpException('参数错误', HttpStatus.BAD_REQUEST)
    }

    const res = await this.fileService.createFolderInjectable(body.originName, body.newName)
    return res
  }

  /** 新增、修改、删除 markdown 文件 */
  @Post('/update/file')
  async updateFile(@Body() body: ICreateFileOptions, @Req() req: Request) {
    console.log(body)
    if(body.status === IFileStatus.delete) {
     const removeRes  = await this.fileService.removeMarkdownFileInjectable(body.categories, body.name)
     return removeRes
    }

    const updateRes = await this.fileService.createMarkdownFileInjectable(body)
    return updateRes
  }
}