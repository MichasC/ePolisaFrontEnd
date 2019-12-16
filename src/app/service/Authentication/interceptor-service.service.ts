import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


const TOKEN_HEADER_KEY = 'Authorization';
const TOKEN_PREFIX = 'Bearer ';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private token: TokenStorageService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    if (TokenStorageService.getToken()) {
      req = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, TOKEN_PREFIX + TokenStorageService.getToken())});
      console.log('authReq with token: ' + TokenStorageService.getToken());
    }
    const isMultipartFile = req.body != null && req.body.toString() === '[object FormData]';
    if (!req.headers.has('Content-Type') && !isMultipartFile) {
      req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    }

    req = req.clone({headers: req.headers.set('Accept', 'application/json')});

    return next.handle(req).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            TokenStorageService.signOut();
            this.router.navigate(['']);
          }
          return throwError(err);
        })
    );
  }
}
