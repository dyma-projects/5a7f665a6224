import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 43; 
  public result: number;

  constructor() { }

  ngOnInit() {
    this.result = this.compteur;
  }

  modifCpt(compteur: number): void {
    console.log('dans modifCpt !!!')
    this.result = compteur;
  }
}
