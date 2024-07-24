import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public name: string = 'iroman'
    public age: number = 50

    get capitalizeName():string {
      return this.name.toUpperCase();
    }

    getHeroDescription():string{
      return `${this.name} - ${this.age}`
    }

    changeHero(): void {
      this.name = 'Spiderman';
    }

    changeAge(): void {
      this.age = 45; 
    }

    resetForm(): void {
      this.name = 'iroman';
      this.age = 50;
    }

}
