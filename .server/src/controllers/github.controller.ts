import { Controller, Get } from '@nestjs/common';
import { GithubService } from 'src/services/github.service';

@Controller('/api/github')
export class GithubController {
  constructor(readonly githubService: GithubService) {}

  @Get('/webhook')
  getGithub() {
    const res = this.githubService.webHook()
    return res
  }
}