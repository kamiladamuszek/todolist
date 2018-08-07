import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Task} from '../models/task';
import {Observable} from 'rxjs/index';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getParams(): HttpParams {
    const uid = this.authService.user.uid;
    const query = {'userId': uid};
    return new HttpParams().set('apiKey', 'k8ZwArAlGkcj1Lu2X7KCqw_PKCk721l-')
      .append('q', JSON.stringify(query));
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.getParams()});
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, {params: this.getParams()}).subscribe(data => {
      console.log(data);
    });
  }
}
