import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  submitFormPost(data){
    console.log(data);
    return this.http.post('url',data);
  }
}
