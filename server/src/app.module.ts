import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { TransformInterceptor } from './interceptor/transformInterceptor';

@Module({
  imports: [],
  controllers: [AppController, FileController],
  providers: [
    AppService,
    FileService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}
