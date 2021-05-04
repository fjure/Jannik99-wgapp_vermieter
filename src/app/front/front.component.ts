import { Component, OnInit } from '@angular/core';
import {UtilityService} from 'src/app/UtilityService';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(public util: UtilityService) { }

  ngOnInit(): void {
  }
  switchPage(page: string): void{
    this.util.view = page;
  }

}
