import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { join } from 'path';
import { exec } from 'child_process';


@Injectable()
export class ReleaseService {
  /**
   * 发布：执行release.sh 脚本
  */
  async releaseVuepress() {
   try {
    const basePath = join(__dirname, '../', '../deploy')
    const filePath = join(basePath, 'release.sh')
    // 执行release.sh 脚本
    exec(`sh ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
      return `发布成功: ${stdout}`
    })
   } catch (error) {
    throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
   }
 }
}