import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [ItemsComponent, DescriptionComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
