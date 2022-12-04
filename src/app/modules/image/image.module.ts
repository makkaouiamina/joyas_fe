import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './component/image.component';


@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    ImageRoutingModule
  ]
})
export class ImageModule { }
