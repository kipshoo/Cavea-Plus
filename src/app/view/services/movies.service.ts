import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient, private commonService:CommonService) { }

  public getMovies(offset:number):Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/blocks?lang=ka&offset=${offset}&limit=3`);
  }

  public getWhenNostalgyHits():Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/blocks/when-nostalgy-hits?lang=ka&limit=18`);
  }
}
