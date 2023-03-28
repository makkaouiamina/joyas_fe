import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from '@layouts/home-template/home-template.component';

const routes: Routes = [
  { path: '', component: HomeTemplateComponent },
  { path : 'products', component: HomeTemplateComponent, loadChildren:() => import('@modules/product/product.module').then(res=> res.ProductModule)},
  { path : 'categories', component: HomeTemplateComponent, loadChildren:() => import('@modules/category/category.module').then(res => res.CategoryModule)},
  { path : 'providers', component: HomeTemplateComponent, loadChildren:() => import('@modules/provider/provider.module').then(res => res.ProviderModule)},
  { path : 'user', component: HomeTemplateComponent, loadChildren:() => import('@modules/user/user.module').then(res => res.UserModule)},
  { path : 'image', component: HomeTemplateComponent, loadChildren:() => import('@modules/image/image.module').then(res => res.ImageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
