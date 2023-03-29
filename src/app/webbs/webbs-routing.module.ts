import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebbsComponent } from './webbs.component';

const routes: Routes = [{
  path: '', component: WebbsComponent 

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebbsRoutingModule { }
