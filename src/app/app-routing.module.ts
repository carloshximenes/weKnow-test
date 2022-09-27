import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./components/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./components/product-item/product-item.module').then(
        (m) => m.ProductItemModule
      ),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./component/not-found/not-found.module').then(
  //       (m) => m.NotFoundModule
  //     ),
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
