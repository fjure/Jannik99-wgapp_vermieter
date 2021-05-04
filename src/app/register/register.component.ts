import { Component, OnInit } from '@angular/core';
import {UtilityService} from 'src/app/UtilityService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public util: UtilityService) { }

  ngOnInit(): void {
  }
  close(): void{
    this.util.view = 'front';
  }
  switchPage(page: string): void{
    this.util.view = page;
  }
}
