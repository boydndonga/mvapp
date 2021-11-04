import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Top250moviesService {

  constructor(private http: HttpClient) {

   }

  getTop250Movies(): Observable<any> {
    return this.http.get("https://imdb-api.com/API/Top250Movies/k_qaju7ilp")
    .pipe(map(response => response),catchError((e: any) => {throw new Error(e);
      })
  );


  }
}
