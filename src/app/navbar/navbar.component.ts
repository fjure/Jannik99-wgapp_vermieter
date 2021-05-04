import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../UtilityService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public util: UtilityService) { }

  ngOnInit(): void {
  }

}
