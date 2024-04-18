import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImV4cCI6MTcxMzQ1NzQyNCwiZW1haWwiOiIifQ.c1qNmIXbJRk6O7TrWMYX1iw7sMsMiKlDFv-Lv6dhY-s';
    console.log(token);

    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      next.handle(request);
    }

    return next.handle(request);
  }
}
