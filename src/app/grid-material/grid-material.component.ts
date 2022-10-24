import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-grid-material',
  templateUrl: './grid-material.component.html',
})
export class GridMaterialComponent implements OnInit {

  cols = '5';

  displayMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '2'],
    [Breakpoints.Medium, '2'],
    [Breakpoints.Large, '5'],
    [Breakpoints.XLarge, '5']
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.cols = this.displayMap.get(query) as string;
        }
      }
    })
   }

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

  ngOnInit(): void {
  }

}
