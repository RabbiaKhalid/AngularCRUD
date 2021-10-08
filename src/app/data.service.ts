import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFetch } from './crud';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
   apiurl='http://dummy.restapiexample.com/api/v1/employees';
   url='http://dummy.restapiexample.com/api/v1/create';
  getData():Observable<IFetch[]>{
     
      return this.http.get<IFetch[]>(this.apiurl);
  }
  saveEmployeeData(data:any){
    return this.http.post(this.url,data);
    // console.log(data);
  }
}