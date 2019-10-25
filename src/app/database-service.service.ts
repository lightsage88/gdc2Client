import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment }  from '../environments/environment';
import {catchError, tap, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

constructor(private http: HttpClient) { }


  addCatToDB(cat) {
    console.log(cat);
    this.http.post<any>(`${environment.API_BASE_URL}/api/users/addCat`, cat)
    
  }
}
