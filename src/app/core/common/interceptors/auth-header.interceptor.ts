import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/common/auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const jwt = this.authService.getToken();

        if (jwt) {
            request = request.clone({
                setHeaders: {
                    authorization: `Bearer ${jwt}`
                }
            });
        }

        return next.handle(request);
    }
}
