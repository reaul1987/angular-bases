import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor']
  public lastHeroRemove?: string;

  removeLastHero(): void{
    this.lastHeroRemove = this.heroNames.pop();
  }
}
