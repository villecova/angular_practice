import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {

HEROES = [
    {id: 1, name:'Superman', img:'superman'},
    {id: 2, name:'Batman', img:'batman'},
    {id: 3, name:'Wonder Woman', img:'wonder-woman'},
    {id: 4, name:'Flash', img:'flash'},
    {id: 5, name:'Green Lantern', img:'green-lantern'},
    {id: 6, name:'Green Arrow', img:'green-arrow'},
    {id: 7, name:'Martian Manhunter', img:'martian'},
    {id: 8, name:'Shazam', img:'shazam'},
    {id: 9, name:'Aquaman', img:'aquaman'},
    {id: 10, name:'Nightwing', img:'nigthwing'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
