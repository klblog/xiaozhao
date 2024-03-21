import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { join } from 'path';
import { exec as execCb } from 'child_process';


@Injectable()
export class ReleaseService {
  /**
   * 发布：执行release.sh 脚本
  */
  async releaseVuepress() {
   try {
    const basePath = join(__dirname,'../', '../deploy')
    const filePath = join(basePath, 'release.sh')
    // 执行release.sh 脚本
    const res = await this.exec(filePath)
    return `发布成功：${res}`
   } catch (error) {
    throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
   }
 }

 private  exec(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    execCb(`sh ${command}`, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else if (stderr) {
        reject(new Error(stderr))
      } else {
        resolve(stdout)
      }
    })
  })
 }
}