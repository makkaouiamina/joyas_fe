import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellersComponent } from '@components/best-sellers/best-sellers.component';
import { HomeTemplateComponent } from '@components/home-template/home-template.component';

const routes: Routes = [
  { path: '', component: HomeTemplateComponent },
  { path: 'best-sellers', component: HomeTemplateComponent, children:[{path: '', component: BestSellersComponent}]},
  { path : 'product', loadChildren:() => import('@modules/product/product.module').then(res=> res.ProductModule)},
  { path : 'category', loadChildren:() => import('@modules/category/category.module').then(res => res.CategoryModule)},
  { path : 'provider', loadChildren:() => import('@modules/provider/provider.module').then(res => res.ProviderModule)},
  { path : 'user', loadChildren:() => import('@modules/user/user.module').then(res => res.UserModule)},
  { path : 'image', loadChildren:() => import('@modules/image/image.module').then(res => res.ImageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
