import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private webReqService: WebRequestService) { }

  createNote(text: string) {
    // wir wollen hier eine web anfrage stellen um eine notiz zu erstellen
    return this.webReqService.post('api/notes', {text});
  }
}
