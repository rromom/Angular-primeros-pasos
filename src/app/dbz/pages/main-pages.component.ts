import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html',
  standalone: false,
})


export class MainPageComponent  {

  constructor( private dbzService: DbzService ) {
  }

  get characters(): Character[] {

    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.DeleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.AddCharacter( character );
  }


}
