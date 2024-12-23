import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient) {}
  baseUrl:string = 'https://cavea.plus/api/v1';

  public getHeaderNavbar():Observable<any>{
    return this.http.get(`${this.baseUrl}/menus/main-menu?lang=ka`)
  }
}
