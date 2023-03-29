import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebbsRoutingModule } from './webbs-routing.module';
import { WebbsComponent } from './webbs.component';


@NgModule({
  declarations: [
    WebbsComponent
  ],
  imports: [
    CommonModule,
    WebbsRoutingModule
  ]
})
export class WebbsModule { }
