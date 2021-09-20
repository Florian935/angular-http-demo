import {
    HttpEvent,
    HttpEventType,
    HttpHandler,
    HttpInterceptor,
    HttpProgressEvent,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UploadInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (request.url.indexOf('/upload/file') === -1) {
            return next.handle(request);
        }

        const delay = 300; // in ms

        return this.createUploadEvents(delay);
    }

    private createUploadEvents(delay: number): Observable<HttpEvent<any>> {
        // Simulate XHR behavior which would provide this information in a Progress Event
        const chunks = 5;
        const total = 12345678;
        const chunkSize = Math.ceil(total / chunks);

        return new Observable<HttpEvent<any>>((observer) => {
            observer.next({ type: HttpEventType.Sent });

            uploadLoop(0);

            function uploadLoop(loaded: number) {
                setTimeout(() => {
                    loaded += chunkSize;

                    if (loaded >= total) {
                        const doneResponse = new HttpResponse({
                            status: 201,
                        });
                        observer.next(doneResponse);
                        observer.complete();

                        return;
                    }

                    const progressEvent: HttpProgressEvent = {
                        type: HttpEventType.UploadProgress,
                        loaded,
                        total,
                    };

                    observer.next(progressEvent);
                    uploadLoop(loaded);
                }, delay);
            }
        });
    }
}
