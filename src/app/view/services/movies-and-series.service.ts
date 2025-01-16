import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesAndSeriesService {
  constructor(private http:HttpClient, private commonService:CommonService) { }

  public getGenre():Observable<any>{
    return this.http.get(`${this.commonService.baseUrl}/genres?lang=ka`)
  }
  public getCountry():Observable<any>{
    return this.http.get(`${this.commonService.baseUrl}/countries?lang=ka`)
  }
  public getfilteredmovies(url:any, url2:any, limit:number, offset:number):Observable<any>{
    return this.http.get(`${this.commonService.baseUrl}/movies/list?lang=ka&${url}limit=${limit}&offset=${offset}&${url2}movieType=movie&order=newest`)
  }
  public getfilteredseries(url:any, url2:any, limit:number, offset:number):Observable<any>{
    return this.http.get(`${this.commonService.baseUrl}/movies/list?lang=ka&${url}distributors=amedia&limit=${limit}&offset=${offset}&${url2}movieType=series&order=newest`)
  }

  public getcards(limit:number, offset:number):Observable<any>{
    return this.http.get(`${this.commonService.baseUrl}/movies/list?lang=ka&limit=${limit}&offset=${offset}&movieType=series&order=newest`)
  }
}
