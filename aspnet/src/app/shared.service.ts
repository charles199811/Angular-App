import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:61618/api";

  constructor(private http:HttpClient) { }

  
  getTeacherList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Teacher');
  }

  addTeacher(val:any){
    return this.http.post(this.APIUrl+'/Teacher',val);
  }

  updateTeacher(val:any){
    return this.http.put(this.APIUrl+'/Teacher',val);
  }

  deleteTeacher(val:any){
    return this.http.delete(this.APIUrl+'/Teacher/'+val);
  }

}
