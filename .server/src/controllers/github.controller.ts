import { Controller, Post } from '@nestjs/common';
import { GithubService } from 'src/services/github.service';

@Controller('/api/github')
export class GithubController {
  constructor(readonly githubService: GithubService) {}

  @Post('/webhook')
  getGithub() {
    const res = this.githubService.webHook()
    return res
  }
}