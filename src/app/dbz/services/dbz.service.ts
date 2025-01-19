import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interfaces';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7000,
  }];

  AddCharacter( character: Character ): void {

    const newCharacter: Character = { id: uuid(), ...character }
    console.log('Main Page');
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index: number ): void {
  //   this.characters.splice( index, 1 );


  DeleteCharacterById( id: string ): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
