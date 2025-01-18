import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = [ 'Spider-man', 'Iron-man', 'Hulk', 'She-Hulk', 'Thor'];
  public deletedHero?: string;

  public removeLastHero(): void {
    this.deletedHero = this.heroesNames.pop();
  }

}

