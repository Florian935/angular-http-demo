import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post';

@Component({
    selector: 'app-query-params',
    templateUrl: './query-params.component.html',
    styleUrls: ['./query-params.component.scss'],
})
export class QueryParamsComponent {
    postsSearchByTitle$?: Observable<Array<Post>>;
    postsSearchByTitleAndContent$?: Observable<Array<Post>>;

    constructor(private _postService: PostService) {}

    onSearchTitle(title: string): void {
        const httpParams = new HttpParams().append('title', title);

        this.postsSearchByTitle$ =
            this._postService.searchPostByTitle(httpParams);
    }

    onSearchByTitleAndContent(title: string, content: string): void {
        const httpParams = new HttpParams().appendAll({ title, content });

        this.postsSearchByTitleAndContent$ =
            this._postService.searchPostByTitleAndContent(httpParams);
    }
}
