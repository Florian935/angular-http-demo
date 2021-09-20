import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [
        PostService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
})
export class CoreModule {}
