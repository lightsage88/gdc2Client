import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment }  from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PetFinderService {

constructor() { }

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


}
