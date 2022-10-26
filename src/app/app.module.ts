import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { GridMaterialComponent } from './grid-material/grid-material.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {LayoutModule} from '@angular/cdk/layout';
import { LayoutComponent } from './layout/layout.component';
import { GridTailwindComponent } from './grid-tailwind/grid-tailwind.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridComponent,
    GridMaterialComponent,
    LayoutComponent,
    GridTailwindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
