import { NgModule } from '@angular/core';
import { FooComponent } from './foo.component';
import { routing } from './foo.routing';

@NgModule({
  imports: [routing],
  declarations: [FooComponent]
})
export class FooModule {
}

