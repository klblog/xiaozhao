import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { TransformInterceptor } from './interceptor/transformInterceptor';
import { HomeController } from './controllers/home.controller';
import { HomeService } from './services/home.service';

@Module({
  imports: [],
  controllers: [AppController, FileController, HomeController],
  providers: [
    AppService,
    FileService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    HomeService
  ],
})
export class AppModule {}
