import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startDate = new Date().getTime();
    return next.handle(req)
    .pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.url.indexOf('comments') >= 0) {
          console.log(event);
          console.log(`response was recieved for ${(new Date().getTime() - startDate) * 0.001 } s`);
          return event;
        }
      })
    );
  }
}

