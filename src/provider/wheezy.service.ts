import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class WheezyService {
  url = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
  }

  public get$(url, filters?): Observable<any> {
    return this.http.get<any>(`${this.url}${url}`, {params: filters});
  }

  public getById$(url, id): Observable<any> {
    return this.http.get<any>(this.url + url + id);
  }

  public post$(url, data): Observable<any> {
    return this.http.post<any>(this.url + url, data);
  }

  public update$(url, id, data): Observable<any> {
    return this.http.put<any>(this.url + url + id, data);
  }

  public delete$(url, id): Observable<any> {
    return this.http.delete<any>(this.url + url + id);
  }
}
