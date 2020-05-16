import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApnewsapiService {

  constructor(private httpClient: HttpClient) { }

  getNews(){
    return this.httpClient.get(`https://apnewsapp.ga/wp-json/wp/v2/posts`);
  }

  getNewsArunachal(){
    return this.httpClient.get('https://apnewsapp.ga/wp-json/wp/v2/posts?categories=89');
  }
}

