import { Component, OnInit } from '@angular/core';
import {UtilityService} from 'src/app/UtilityService';
import { NoteService } from 'src/app/note.service'


@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  constructor(public util: UtilityService, private noteService: NoteService) { }

  ngOnInit(): void {
  }

  createNewNote() {
    this.noteService.createNote('Test note').subscribe((response: any) => {
      console.log(response);
    });
  }

}
