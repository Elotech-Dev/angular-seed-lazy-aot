import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { routing } from './bar.routing';

@NgModule({
  imports: [routing],
  declarations: [BarComponent]
})
export class BarModule {
}

