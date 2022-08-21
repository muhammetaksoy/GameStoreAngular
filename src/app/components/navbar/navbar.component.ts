import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/shared/constants/AppConstants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarTitle:string=AppConstants.NavbarTitle;
  constructor() { }
}
