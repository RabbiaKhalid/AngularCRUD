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
  getData():Observable<IFetch[]>{
     
      return this.http.get<IFetch[]>(this.apiurl);
  }
}