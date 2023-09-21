import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from './flowers.component';
import { Routes } from '@angular/router';
import { FlorComponent } from './flor/flor.component';
export const Approutes: Routes = [
  {
    path: '',
    component: FlorComponent
  },
  {
    path: 'flowers',
    component: FlowersComponent,
  }];


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule
  ]
})
export class FlowersModule { }
