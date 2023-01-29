import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/shared/material.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './component/category.component';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule
  ]
})
export class CategoryModule { }
