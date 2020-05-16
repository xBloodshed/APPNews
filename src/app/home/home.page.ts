import { Component } from '@angular/core';
import { ApnewsapiService } from '../apnewsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: any;

  constructor(private apiService:ApnewsapiService) {}

  ionViewDidEnter() {

    this.apiService.getNewsArunachal().subscribe((data)=>{
      console.log(data);
      this.articles = data;
    });
    
  }
}
