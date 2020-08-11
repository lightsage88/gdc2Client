import { Injectable } from '@angular/core';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouteHelperService {
  constructor(private router: Router) { }
  bouncer() {
    localStorage.getItem('authToken') ? null : this.router.navigate(['/about']);
  }

  coatCheck(){
    this.router.navigate(['/about']);
  }
}