import { HttpRequest, HttpResponse } from '@angular/common/http';

export abstract class CacheService {
    abstract get(request: HttpRequest<any>): HttpResponse<any> | undefined;
    abstract put(request: HttpRequest<any>, response: HttpResponse<any>): void;
}
