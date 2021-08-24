import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SharedModule } from '../shared/shared.module';
import { SegmentsComponent } from './segments/segments.component';


@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceholderComponent,
    SegmentsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
