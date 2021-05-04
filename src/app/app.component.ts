import { Component } from '@angular/core';
import {UtilityService} from './UtilityService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WGApp-Vermieterinterface';
  constructor(public util: UtilityService) {
    this.util.view = 'controlpanel';
  }
}
