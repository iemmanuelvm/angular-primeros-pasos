import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-dd-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Podemos en los parentesis poner un nombre para hacerlo visible afuera
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();




  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter():void {
    console.log(this.character);
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power:0}
  }


}
