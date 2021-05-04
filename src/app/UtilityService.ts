import {Injectable} from '@angular/core';

@Injectable()
export class UtilityService{

  view: string;
  controlpanelview: string;

  switchPage(page: string): void{
    this.view = page;
  }

  switchControlPanel(page: string): void{
    this.controlpanelview = page;
  }
}
