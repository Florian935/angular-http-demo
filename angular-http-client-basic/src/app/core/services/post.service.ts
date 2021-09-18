import {
    HttpClient,
    HttpErrorResponse,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post';

const options = {
    observe: 'response' as const,
};

@Injectable()
export class PostService {
    BASE_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

    constructor(private _http: HttpClient) {}

    getPosts(): Observable<HttpResponse<Array<Post>>> {
        return this._http
            .get<Array<Post>>(this.BASE_API_URL, options)
            .pipe(retry(3), catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
            );
        }
        // Return an observable with a user-facing error message.
        return throwError('Something bad happened; please try again later.');
    }
}
