import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: ':id', component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
