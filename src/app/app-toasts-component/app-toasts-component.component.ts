import { Component, OnInit } from '@angular/core';
import {AppToastService} from '../app-toast-service.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './app-toasts-component.component.html',
  styleUrls: ['./app-toasts-component.component.css']
})
export class AppToastsComponent implements OnInit {
  constructor(public toastService: AppToastService) { }
  ngOnInit() {
  }
}