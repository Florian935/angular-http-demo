import {
    HttpClient,
    HttpErrorResponse,
    HttpEvent,
    HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UploaderService {
    private _progressMessagesSource$ = new BehaviorSubject<Array<string>>([]);
    _progressMessages$ = this._progressMessagesSource$.asObservable();

    constructor(private _http: HttpClient) {}

    upload(file: File): Observable<string> {
        if (!file) {
            return of<string>();
        }

        const options = {
            reportProgress: true,
            observe: 'events' as const,
        };

        return this._http.post('/upload/file', file, options).pipe(
            map((event: HttpEvent<any>) => this.getEventMessage(event, file)),
            tap((message: string) => this.showProgress(message)),
            last(), // return last (completed) message to caller
            catchError(this.handleError(file))
        );
    }

    private getEventMessage(event: HttpEvent<any>, file: File): string {
        switch (event.type) {
            case HttpEventType.Sent:
                return `Uploading file "${file.name}" of size ${file.size}.`;

            case HttpEventType.UploadProgress:
                // Compute and show the % done:
                const percentDone = Math.round(
                    (100 * event.loaded) / (event.total ?? 0)
                );
                return `File "${file.name}" is ${percentDone}% uploaded.`;

            case HttpEventType.Response:
                return `File "${file.name}" was completely uploaded!`;

            default:
                return `File "${file.name}" surprising upload event: ${event.type}.`;
        }
    }

    private handleError(file: File) {
        const userMessage = `${file.name} upload failed.`;

        return (error: HttpErrorResponse) => {
            console.error(error);

            const message =
                error.error instanceof Error
                    ? error.error.message
                    : `server returned code ${error.status} with body "${error.error}"`;

            // Let app keep running but indicate failure.
            return of(userMessage);
        };
    }

    private showProgress(message: string): void {
        const messages = [...this._progressMessagesSource$.getValue(), message];

        this._progressMessagesSource$.next(messages);
    }
}
