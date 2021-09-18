import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take, toArray } from 'rxjs/operators';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post';

@Component({
    selector: 'app-entire-response',
    templateUrl: './entire-response.component.html',
    styleUrls: ['./entire-response.component.scss'],
})
export class EntireResponseComponent implements OnInit {
    posts$!: Observable<Array<Post>>;
    headers$!: Observable<HttpHeaders>;
    status$!: Observable<number>;

    constructor(private _postService: PostService) {}

    ngOnInit(): void {
        this.posts$ = this._postService.getPosts().pipe(
            map(
                (httpResponse: HttpResponse<Array<Post>>) => httpResponse.body!
            ),
            switchMap((posts: Array<Post>) => posts),
            take(5),
            toArray()
        );

        this.headers$ = this._postService
            .getPosts()
            .pipe(
                map(
                    (httpResponse: HttpResponse<Array<Post>>) =>
                        httpResponse.headers
                )
            );

        this.status$ = this._postService
            .getPosts()
            .pipe(
                map(
                    (httpResponse: HttpResponse<Array<Post>>) =>
                        httpResponse.status
                )
            );
    }
}
