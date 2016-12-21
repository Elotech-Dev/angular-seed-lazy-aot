import { RouterModule } from '@angular/router';
import { FooComponent } from './foo.component';

export const routing = RouterModule.forChild([
  {path: 'foo', component: FooComponent}
]);

