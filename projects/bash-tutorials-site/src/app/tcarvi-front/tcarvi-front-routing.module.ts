import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TcarviFrontComponent } from './tcarvi-front.component';

const routes: Routes = [{ path: '', component: TcarviFrontComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TcarviFrontRoutingModule { }
