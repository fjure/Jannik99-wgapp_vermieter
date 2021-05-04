import { Component, OnInit } from '@angular/core';
import {UtilityService} from 'src/app/UtilityService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public util: UtilityService) { }

  ngOnInit(): void {
  }

}
