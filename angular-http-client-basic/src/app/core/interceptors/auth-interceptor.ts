import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authToken = 'Bearer token';

        const authRequest = request.clone({
            setHeaders: { Authorization: authToken },
        });

        return next.handle(authRequest);
    }
}
