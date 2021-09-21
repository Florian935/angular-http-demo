import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared';

@Component({
    selector: 'app-debouncing-interaction',
    templateUrl: './debouncing-interaction.component.html',
    styleUrls: ['./debouncing-interaction.component.scss'],
})
export class DebouncingInteractionComponent implements OnInit {
    private searchText$ = new Subject<string>();
    posts$?: Observable<Array<Post>>;

    constructor(private _postService: PostService) {}

    ngOnInit(): void {
        this.posts$ = this.searchText$.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap((title: string) => {
                const params: HttpParams = new HttpParams().append(
                    'title',
                    title
                );
                return this._postService.searchPostByTitle(params);
            })
        );
    }

    search(title: string): void {
        this.searchText$.next(title);
    }
}
