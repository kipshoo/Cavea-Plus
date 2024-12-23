import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient, private commonService:CommonService) { }

  public getThermOfUse():Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/terms-of-use?lang=ka`)
  }

  public sendPasswordResetRequest(data:any):Observable<any> {
    return this.http.post(`${this.commonService.baseUrl}/auth/password/reset`, data);
  }

  public sendLoginRequest(data:any):Observable<any> {
    return this.http.post(`${this.commonService.baseUrl}/auth/login`, data);
  }
  
  public sendRegisterRequest(data:any):Observable<any> {
    return this.http.post(`${this.commonService.baseUrl}/auth/register`, data);
  }

  public sendVerifyRequest(data:any):Observable<any> {
    return this.http.post(`${this.commonService.baseUrl}/auth/verify`, data);
  }

  public resendVeiryfyRequest(userId:string):Observable<any> {
    return this.http.get(`${this.commonService.baseUrl}/auth/verify/resend/${userId}`);
  }

}