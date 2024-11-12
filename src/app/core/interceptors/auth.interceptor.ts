import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('auth-token');
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }
  return next(req);
}



// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//
//   constructor() {}
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('interceptor');
//     const token = sessionStorage.getItem('auth-token');
//     if (token) {
//       const clonedRequest = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return next.handle(clonedRequest);
//     }
//     return next.handle(req);
//   }
// }
