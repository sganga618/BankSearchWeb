import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
 
import 'rxjs/add/operator/map';
 
import 'rxjs/add/operator/catch';
 
import { Observable } from 'rxjs/Observable';
 import {Bank} from './bank';

 
@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }
 
getBankDetails(model:Bank):Observable<Bank[]>{
try {
    return this.http.post('http://localhost:8080/bank/getBankDetails', model) .map(res=>res) ;
  }catch (error) { 
    console.log(error);
  }  
}

}
