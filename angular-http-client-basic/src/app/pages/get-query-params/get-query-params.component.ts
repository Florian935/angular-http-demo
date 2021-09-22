import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared';

@Component({
    selector: 'app-get-query-params',
    templateUrl: './get-query-params.component.html',
    styleUrls: ['./get-query-params.component.scss'],
})
export class GetQueryParamsComponent implements OnInit {
    private ids$ = new Subject<string>();
    posts$?: Observable<Array<Post>>;

    constructor(private _postService: PostService) {}

    ngOnInit(): void {
        this.posts$ = this.ids$.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap((ids: string) => {
                const params = new HttpParams().append('ids', ids);

                return this._postService.getPostByIds(params);
            })
        );
    }

    onGet(ids: string): void {
        this.ids$.next(ids);
    }
}
