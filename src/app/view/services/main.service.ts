import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../../shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http:HttpClient, private commonService:CommonService) { }
  
  public getMainPageSlider():Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/sliders/main-slider?lang=ka`);
  }
}
