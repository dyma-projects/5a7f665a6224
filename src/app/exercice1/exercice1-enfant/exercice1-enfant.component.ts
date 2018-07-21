import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
 
  @Input('cpt') compteurEnfant: number;
  @Output() modifCptEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  Plus()
  {
    this.compteurEnfant++;
    this.modifCptEvent.emit(this.compteurEnfant)
    console.log(this.compteurEnfant);
  }
  
  Moins()
  {
    this.compteurEnfant--
    this.modifCptEvent.emit(this.compteurEnfant);
    console.log(this.compteurEnfant);
  }
}
