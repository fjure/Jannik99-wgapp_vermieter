import { Component, OnInit, Inject } from '@angular/core';
import {mergeMappings} from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/source_file';
import {UtilityService} from 'src/app/UtilityService';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(public util: UtilityService) {
  }

  ngOnInit(): void {
  }

}
