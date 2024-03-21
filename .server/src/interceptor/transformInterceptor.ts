import { Injectable, NestInterceptor, CallHandler, ExecutionContext, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
      return next.handle().pipe(
        map(data => ({ status: HttpStatus.OK, data,  message: '' }))
      )
  }
}