import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const startTime = Date.now();
        let status: string;

        return next.handle(req).pipe(
            tap(
                event => {
                    status = '';
                    if (event instanceof HttpResponse) {
                        status = 'succeeded';
                    }
                },
                error => status = 'failed'
            ),
            finalize(() => {
                const elapsedTime = Date.now() - startTime;
                const message = req.method + ' ' + req.urlWithParams + ' ' + status
                    + ' in ' + elapsedTime + 'ms';

                if (!environment.production) {
                    this.logDetails(message);
                }

            })
        );
    }
    private logDetails(msg: string) {
        console.log(msg);
    }
}
