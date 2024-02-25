import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements  HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authenticationResponse: any = {};
    if (localStorage.getItem('connectedUser')) {
      authenticationResponse = JSON.parse(
        localStorage.getItem('accessToken') as string
      );

      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
