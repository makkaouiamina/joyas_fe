import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { HomeTemplateComponent } from './components/home-template/home-template.component';

const routes: Routes = [
  { path: '', component: HomeTemplateComponent },
  { path: 'best-sellers', component: HomeTemplateComponent, children:[{path: '', component: BestSellersComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
