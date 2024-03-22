import { Controller, Get } from '@nestjs/common';

@Controller('/github')
export class GithubController {
  @Get('/webhook')
  getGithub() {
    return '成功'
  }
}