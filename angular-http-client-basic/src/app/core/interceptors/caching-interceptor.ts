import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private _cacheService: CacheService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!this.isCacheable(request)) {
            return next.handle(request);
        }

        const cachedResponse = this._cacheService.get(request);

        return cachedResponse
            ? of(cachedResponse)
            : this.sendRequest(request, next, this._cacheService);
    }

    // Only the GET method on the exact URL 'http://localhost:8080/api/v1.0/posts'
    // is cacheable.
    private isCacheable(request: HttpRequest<any>): boolean {
        return (
            request.method === 'GET' &&
            request.url === 'http://localhost:8080/api/v1.0/posts'
        );
    }

    private sendRequest(
        request: HttpRequest<any>,
        next: HttpHandler,
        cache: CacheService
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('MISE EN CACHE');
                    cache.put(request, event); // update the cache
                }
            })
        );
    }
}
