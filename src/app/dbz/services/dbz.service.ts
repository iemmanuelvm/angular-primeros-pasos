import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Napa',
    power: 400
  }];

  public addNewCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    const newCharacter: Character = {
      id: uuid(), ...character
    }


    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(index:number):void {
  //   this.characters.splice(index, 1);
  // }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
