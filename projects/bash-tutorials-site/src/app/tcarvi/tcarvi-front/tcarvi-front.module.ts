import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcarviFrontRoutingModule } from './tcarvi-front-routing.module';
import { TcarviFrontComponent } from './tcarvi-front.component';


@NgModule({
  declarations: [
    TcarviFrontComponent
  ],
  imports: [
    CommonModule,
    TcarviFrontRoutingModule
  ]
})
export class TcarviFrontModule { }
