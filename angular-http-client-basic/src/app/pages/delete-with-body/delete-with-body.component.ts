import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
    selector: 'app-delete-with-body',
    templateUrl: './delete-with-body.component.html',
    styleUrls: ['./delete-with-body.component.scss'],
})
export class DeleteWithBodyComponent {
    constructor(private _postService: PostService) {}

    onDelete(ids: string): void {
        const idsArray = ids.split(',');

        this._postService.deletePosts(idsArray).subscribe(console.log);
    }
}
