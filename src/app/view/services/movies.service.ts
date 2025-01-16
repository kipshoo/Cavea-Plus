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

  public getMoviesBySlugNmae(slugName:string):Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/blocks/${slugName}?lang=ka&limit=18`);
  }

  public getMoviesBySlugNameForSingleMoviePage(slugName: string):Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/movies/${slugName}?lang=ka`)
  }

  public getRecomendationMovies(slugName:string):Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/movies/${slugName}/recommendations?lang=ka`)
  }

  public getcards(limit:number, offset:number):Observable<any>{
    return this.http.get(`${this.commonService.baseUrl}/movies/list?lang=ka&limit=${limit}&offset=${offset}&movieType=movie&order=newest`)
  }
}
