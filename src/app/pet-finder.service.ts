import { Injectable } from '@angular/core';
import axios from 'axios';
import Axios from 'axios-observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment }  from '../environments/environment';
import {catchError, tap, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { SearchResult } from './search-result';


@Injectable({
  providedIn: 'root' 
})
export class PetFinderService {

constructor(private http: HttpClient) { }

catSearchResults: any;

url = 'http://httpbin.org/post';
postData ={
  test: 'my-content'
};
 httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

errorHandler(error: HttpErrorResponse) {
  return throwError(error.message || 'Server Error');
}

getCatBreeds() { 
  console.log('getCatBreeds running');
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
  console.log('getCatColorCoatSex running');
  return axios({
    url: `${environment.API_BASE_URL}/api/cats/catColorCoatSex`,
    method: "GET",
    headers: {
      accept: "application/json"
    }
  })
  .then(response => {
    console.log(response.data);
    return response.data;
  })
  .catch(err => console.error(err))
}

  // seekCats (cattributes): any{
    
  // let {breed, coat, color, gender, age} = cattributes;

  // let body = [breed, coat, color, gender, age];

  //   return this.http.post<any>(`${environment.API_BASE_URL}/api/cats/seekCats`, body)
      

  // // return axios({
  // //     url: `${environment.API_BASE_URL}/api/cats/seekCats`,
  // //     method: "POST",
  // //     headers: {
  // //         accept: "application/json"
  // //     },
  // //     data: {
  // //         breed, coat, color, gender, age
  // //     }
  // // })
  // // .then(response => {
  // //     console.log(response);
  // //     console.log(typeof response.data.animals);
  // //     return response.data;
  // // })
  // // .catch(err => console.error(err));


  // // return Axios.request({
  // //   method: 'post',
  // //   url: `${environment.API_BASE_URL}/api/cats/seekCats`,
  // //   data: {

      
  // //       breed, coat, color, gender, age
      

  // //   },
  // //   headers: {
  // //     accept: "application/json"
  // //   },
  // //   // transformResponse: [function(data) {
  // //   //   return data;
  // //   // }]
  // // }) 
  // // .subscribe(
  // //   response => {
  // //     console.log(response);  
  // //     return response.data.animals;
  // //   },
  // //   error => console.error(error)
  // // )

  //       // return this.http.post<any>(`${environment.API_BASE_URL}`, body,this.httpOption )
        
  //       // .subscribe(

  //       // )



  // //       return this.http.post(`${environment.API_BASE_URL}/api/cats/seekCats`,
  // //   {
  // //   breed, coat, color, gender, age
  // //   })
   
  // //   .subscribe(
  // //       (val) => {
  // //           console.log("POST call successful value returned in body", 
  // //                       val);
  // //                       return val;
  // //       },
  // //       (response) => {
  // //           console.log("POST call in error", response);
  // //           return response

  // //       },
  // //       () => {
  // //           console.log("The POST observable is now completed.");
            
  // //       });



  //   } 


  seekCats(cattributes):Observable<SearchResult[]> {
    

  let {breed, coat, color, gender, age} = cattributes;

  let body = {breed, coat, color, gender, age};

   return this.http.post<SearchResult[]>(`${environment.API_BASE_URL}/api/cats/seekCats`,body)
  
  }

    
     
}

