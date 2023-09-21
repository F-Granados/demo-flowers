import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlorComponent } from './flowers/flor/flor.component';
import { FlowersComponent } from './flowers/flowers.component';


export const Approutes: Routes = [
  {
    path: '',
    component: FlorComponent,
  },
  {
    path: 'flowers',
    component: FlowersComponent,
  },

  {
    path: 'flor',
    loadChildren: () => import('./flowers/flowers.module').then(m => m.FlowersModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
