import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item.component';

const routes: Routes = [
  { path: '', component: ProductItemComponent, pathMatch: 'full' },
  { path: ':id', component: ProductItemComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductItemRoutingModule {}
