import {
    HttpClient,
    HttpErrorResponse,
    HttpParams,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post';

const nonJsonData = {
    responseType: 'text' as const,
};

@Injectable()
export class PostService {
    BASE_API_URL = 'http://localhost:8080/api/v1.0/posts';

    constructor(private _http: HttpClient) {}

    getPosts(): Observable<HttpResponse<Array<Post>>> {
        const options = {
            observe: 'response' as const,
        };

        return this._http
            .get<Array<Post>>(this.BASE_API_URL, options)
            .pipe(retry(3), catchError(this.handleError));
    }

    getPostsCount(): Observable<string> {
        return this._http
            .get(`${this.BASE_API_URL}/count`, nonJsonData)
            .pipe(retry(3), catchError(this.handleError));
    }

    searchPostByTitle(params: HttpParams): Observable<Array<Post>> {
        const options = { params };

        return this._http
            .get<Array<Post>>(`${this.BASE_API_URL}/search`, options)
            .pipe(retry(3), catchError(this.handleError));
    }

    searchPostByTitleAndContent(params: HttpParams): Observable<Array<Post>> {
        const options = { params };

        return this._http
            .get<Array<Post>>(`${this.BASE_API_URL}/multiple/search`, options)
            .pipe(retry(3), catchError(this.handleError));
    }

    deletePosts(ids: Array<string>): Observable<void> {
        const body = { body: ids };

        return this._http
            .delete<void>(this.BASE_API_URL, body)
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
