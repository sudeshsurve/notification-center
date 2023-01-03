import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1ZGVzaCIsImVtYWlsIjoic3VkZXNoQGdtYWlsLmNvbSIsImlhdCI6MTY3MjI5MDU3OSwiZXhwIjoxOTcyMjkwNTc5fQ.oPiSHW9o39BRU1XQ2ZbYGjvt_byhzux55LygsXnHwD0"
       if(token){
        request = request.clone({
          setHeaders: {Authorization: `Bearer ${token}`}
       });
       }
    return next.handle(request).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return throwError (()=> new Error (error.statusText))
      // console.error('An error occurred:', error.error);
    } 
    if(error.status == 404 ){
      return throwError(() => new Error(error.statusText))
    }
    if(error.status === 401){
      return throwError(() => new Error(error.statusText))
    }
    if(error.status === 400){
      // console.log(error.statusText);
      return throwError(() => new Error(error.statusText))
    }
    else {
      console.log(error);
      
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
