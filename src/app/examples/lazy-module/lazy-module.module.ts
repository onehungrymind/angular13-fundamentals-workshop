import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleComponent } from './lazy-module.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [LazyModuleComponent],
  imports: [CommonModule, MaterialModule, LazyRoutingModule],
})
export class LazyModule {}
