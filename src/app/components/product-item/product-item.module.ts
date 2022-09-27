import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductItemRoutingModule } from './product-item-routing.module';
import { ProductItemComponent } from './product-item.component';
import { ProductItemService } from './product-item.service';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [
    CommonModule,
    ProductItemRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductItemService],
})
export class ProductItemModule {}
