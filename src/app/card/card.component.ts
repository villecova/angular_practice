import { Component, Input, OnInit  } from "@angular/core";
import { Hero } from "../layout/layout.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
  })

export class CardComponent implements OnInit  {

    @Input() hero: Hero = null;

    constructor() { }

    ngOnInit(): void {
    }
}
