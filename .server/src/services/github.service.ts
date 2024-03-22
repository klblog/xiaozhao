import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { join } from 'path';
import { exec as execCb } from 'child_process';

@Injectable()
export class GithubService {
  /**
   * 拉取： wekhook 拉取最新master的代码
   */
  webHook() {
    try {
      const basePath = join(__dirname, '../', '../deploy')
      const filePath = join(basePath, 'webhook.sh')
      // 执行 webhook.sh
      const res = this.exec(filePath)
      return `拉取成功：${res}`
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  private exec(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      execCb(`sh ${command}`, (error, stdout, stderr) => {
        if (error) {
          console.log(error, '23232323')
          // reject(error)
        } else if (stderr) {
          console.log(stderr, '212')
          // reject(new Error(stderr))
        } else {
          console.log('执行完成了')
          console.log(stdout)
          resolve(stdout)
        }
      })
    })
  }
}