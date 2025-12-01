import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('THE REQUEST IS BEING SENT NOW...');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `THE TIME SPENT UNTIL THE RESPONSE IS DELIVERED ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}