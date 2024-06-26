import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { TransformInterceptor } from './interceptor/transformInterceptor';
import { HomeController } from './controllers/home.controller';
import { HomeService } from './services/home.service';
import { ReleaseController } from './controllers/release.controller';
import { ReleaseService } from './services/release.service';
import { GithubController } from './controllers/github.controller';
import { GithubService } from './services/github.service';

@Module({
  imports: [],
  controllers: [AppController, FileController, HomeController, ReleaseController, GithubController],
  providers: [
    AppService,
    FileService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    HomeService,
    ReleaseService,
    GithubService
  ],
})
export class AppModule { }
