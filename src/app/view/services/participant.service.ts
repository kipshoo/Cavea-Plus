import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  constructor(private http:HttpClient, private commonService:CommonService) { }

  public getParticipants(slugName:string):Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/participants/${slugName}/movies?lang=ka&offset=0&limit=18`)
  }
}
