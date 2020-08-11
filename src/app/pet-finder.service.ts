import axios from 'axios'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { SearchResult } from './search-result'
import { environment }  from '../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root' 
})
export class PetFinderService {

constructor(private http: HttpClient) { }

catSearchResults: any
url = 'http://httpbin.org/post'
postData ={
  test: 'my-content'
}
httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

errorHandler(error: HttpErrorResponse) {
  return throwError(error.message || 'Server Error');
}

getCatBreeds() { 
  return axios({
    url: `${environment.API_BASE_URL}/api/cats/catBreeds`,
    method: "GET",
    headers: {
      accept: "application/json"
    }
  })
  .then(response => {
    return response.data.breeds.map((catBreed)=>{
     return catBreed.name
    })
  })
  .catch(err => console.error(err));
}

getCatColorCoatSex(){
  return axios({
    url: `${environment.API_BASE_URL}/api/cats/catColorCoatSex`,
    method: "GET",
    headers: {
      accept: "application/json"
    }
  })
  .then(response => {
    return response.data;
  })
  .catch(err => console.error(err))
}
seekCats(cattributes):Observable<SearchResult[]> {
  let {breed, coat, color, gender, age} = cattributes
  let body = {breed, coat, color, gender, age}
   return this.http.post<SearchResult[]>(`${environment.API_BASE_URL}/api/cats/seekCats`, body)
  }  
}