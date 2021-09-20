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
    posts$?: Observable<Array<Post>>;

    constructor(private _postService: PostService) {}

    onSearchTitle(title: string): void {
        this.posts$ = this._postService.searchPost(title);
    }
}
