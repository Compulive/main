import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class WheezyService {
  url = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
  }

  public get$(url, filters?): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get<any>(`${this.url}${url}`, {headers: headers});
  }

  public getById$(url, id): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get<any>(this.url + url + id, {headers: headers});
  }

  public post$(url, data): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.post<any>(this.url + url, data, {headers: headers});
  }

  public login$(url, data): Observable<any> {
    return this.http.post<any>(this.url + url, data);
  }


  public update$(url, id, data): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.put<any>(this.url + url + id, data, {headers: headers});
  }

  public delete$(url, id): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.delete<any>(this.url + url + id, {headers: headers});
  }
}
