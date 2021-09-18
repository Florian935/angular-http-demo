import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';

@Component({
    selector: 'app-non-json-data',
    templateUrl: './non-json-data.component.html',
    styleUrls: ['./non-json-data.component.scss'],
})
export class NonJsonDataComponent implements OnInit {
    numberOfPosts?: Observable<string>;

    constructor(private _postService: PostService) {}

    ngOnInit(): void {
        this.numberOfPosts = this._postService.getPostsCount();
    }
}
