import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCacheEntry } from '../models/request-cache-entry';
import { CacheService } from './cache.service';

const maxAge = 30000; // maximum cache age (ms)

@Injectable({
    providedIn: 'root',
})
export class RequestCacheService implements CacheService {
    cache = new Map<string, RequestCacheEntry>();

    constructor() {}

    get(request: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = request.urlWithParams;
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        const isExpired = cached.lastRead < Date.now() - maxAge;

        return isExpired ? undefined : cached.response;
    }

    put(request: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = request.urlWithParams;

        const newEntry: RequestCacheEntry = {
            url,
            response,
            lastRead: Date.now(),
        };
        this.cache.set(url, newEntry);

        // remove expired cache entries
        const expired = Date.now() - maxAge;
        this.cache.forEach((entry) => {
            if (entry.lastRead < expired) {
                this.cache.delete(entry.url);
            }
        });
    }
}
