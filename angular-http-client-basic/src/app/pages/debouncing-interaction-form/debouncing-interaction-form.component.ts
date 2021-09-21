import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {
    debounceTime,
    distinctUntilKeyChanged,
    switchMap,
} from 'rxjs/operators';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared';

@Component({
    selector: 'app-debouncing-interaction-form',
    templateUrl: './debouncing-interaction-form.component.html',
    styleUrls: ['./debouncing-interaction-form.component.scss'],
})
export class DebouncingInteractionFormComponent implements OnInit {
    searchForm!: FormGroup;
    posts$?: Observable<Array<Post>>;

    constructor(
        private _formBuilder: FormBuilder,
        private _postService: PostService
    ) {}

    ngOnInit(): void {
        this.searchForm = this._formBuilder.group({
            search: [''],
        });

        this.posts$ = this.searchForm.valueChanges.pipe(
            debounceTime(500),
            distinctUntilKeyChanged('search'),
            switchMap(({ search }) => {
                const params: HttpParams = new HttpParams().append(
                    'title',
                    search
                );
                return this._postService.searchPostByTitle(params);
            })
        );
    }
}
