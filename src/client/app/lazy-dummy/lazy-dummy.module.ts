import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderModule } from '../shared/for_lazy/header.module';

import { LazyDummyComponent } from './lazy-dummy.component';
import { LazyDummyRoutingModule } from './lazy-dummy-routing.module';

@NgModule({
  imports: [CommonModule, LazyDummyRoutingModule, ReactiveFormsModule, HeaderModule],
  declarations: [LazyDummyComponent],
  exports: [LazyDummyComponent]
})
export class LazyDummyModule {



}
