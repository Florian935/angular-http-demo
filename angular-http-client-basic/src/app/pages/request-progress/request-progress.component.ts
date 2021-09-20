import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UploaderService } from 'src/app/core/services/uploader.service';

@Component({
    selector: 'app-request-progress',
    templateUrl: './request-progress.component.html',
    styleUrls: ['./request-progress.component.scss'],
})
export class RequestProgressComponent implements OnInit {
    progressMessages$?: Observable<Array<string>>;

    constructor(private _uploaderService: UploaderService) {}

    ngOnInit(): void {
        this.progressMessages$ = this._uploaderService._progressMessages$;
    }

    onPicked(input: HTMLInputElement): void {
        const file = input.files?.[0];

        if (file) {
            this._uploaderService
                .upload(file)
                .pipe(tap((_) => (input.value = '')))
                .subscribe();
        }
    }
}
