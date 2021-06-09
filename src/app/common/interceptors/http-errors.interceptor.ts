import { environment } from './../../../environments/environment';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!environment.production) {
            return next.handle(request)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        let errorMsg = '';
                        if (error.error instanceof ErrorEvent) {
                            console.log('This is client side error');
                            errorMsg = `Error: ${error.error.message}`;
                        }
                        else {
                            console.log('This is server side error');
                            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                        }
                        console.log(errorMsg);
                        console.log(error);

                        return throwError(errorMsg);
                    })
                );
        }
        return null;
    }
}
