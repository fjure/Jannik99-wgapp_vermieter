import { Component, OnInit } from '@angular/core';
import {UtilityService} from 'src/app/UtilityService';


@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  constructor(public util: UtilityService) {
    this.util.switchControlPanel('dashboard');
  }

  ngOnInit(): void {
  }

}
