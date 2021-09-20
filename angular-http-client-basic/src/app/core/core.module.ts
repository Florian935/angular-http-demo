import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { LoggingInterceptor } from './interceptors/logging-interceptor';
import { CachingInterceptor } from './interceptors/caching-interceptor';
import { CacheService } from './services/cache.service';
import { RequestCacheService } from './services/request-cache.service';
import { UploadInterceptor } from './interceptors/upload-interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [
        PostService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UploadInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CachingInterceptor,
            multi: true,
        },
        {
            provide: CacheService,
            useClass: RequestCacheService,
        },
    ],
})
export class CoreModule {}
