import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMenuComponent } from './menu.component';

@NgModule({
  imports: [RouterModule, RouterModule.forChild([{ path: '', component: AppMenuComponent }])],
  declarations: [AppMenuComponent]
})
export class MenuModule { }
