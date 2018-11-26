import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export abstract class DataService {
  constructor(protected url: string, protected http: HttpClient) {
  }

  getAll(searchString: string) {
    searchString = searchString.trim();
    const query = searchString ? new HttpParams().set('searchString', searchString) : null;

    return this.http.get(this.url, { params: query })
      .pipe(catchError(this.handleError));
  }

  get(id: string) {
    return this.http.get(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
