import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v7 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public characters: Character[] = [
        {
            id: uuid(),
            name: "Krilling",
            power: 1000
        },
        {
            id: uuid(),
            name: "Goku",
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    onNewCharacter( character: Character ):void {
        //debugger;
        let newCaracter: Character = { id: uuid(), ...character };
        this.characters.push(newCaracter);
    }

    onDeleteIndex( id: string ):void {
        this.characters = this.characters.filter(q => q.id !== id)
        //this.characters.splice(index, 1);
    }

}