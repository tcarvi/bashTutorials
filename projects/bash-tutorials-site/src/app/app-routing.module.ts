import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'front', loadChildren: () => import('./tcarvi/tcarvi-front/tcarvi-front.module').then(m => m.TcarviFrontModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
