import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interfaces';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  //TODO: onDeleteId = Index value: number
  @Output()
  // public onDeleteID: EventEmitter<number> = new EventEmitter();
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter( index: number ): void {
  onDeleteCharacter( id?: string ): void {
    //TODO: Emitir el ID del personaje

    if ( !id ) return;

    // console.log( { id } );
    this.onDeleteID.emit( id );

  }

}
