import { RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';

export const routing = RouterModule.forChild([
  {path: 'bar', component: BarComponent}
]);

