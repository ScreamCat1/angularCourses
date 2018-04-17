import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { COMMENT } from './../models/product-comments';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CommentsService {
  private baseUrl = 'http://localhost:3000/comments';
  private isShown = false;
  constructor(private http: HttpClient) { }



  getComments(productId: number): Observable<COMMENT> {
    const url = `${this.baseUrl}/${productId}`,
    options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(url, options)
    .pipe(
      map(this.handleData));
  }

  hasShowComments(): boolean {
    this.isShown = !this.isShown;
    return this.isShown;
  }

  private handleData(response: HttpResponse<COMMENT>) {
    const body = response;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return new Error('error' + error);
  }
}
