import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyModuleComponent } from './lazy-module.component';

const routes: Routes = [
  { path: '', component: LazyModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
