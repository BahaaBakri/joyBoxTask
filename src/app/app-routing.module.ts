import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddElementComponent } from './add-element/add-element.component';
import { ShowItemDetailsComponent } from './show-items/show-item-details/show-item-details.component';
import { ShowItemsComponent } from './show-items/show-items.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"/show",
    pathMatch:"full"
  },
  {
    path:"add",
    component:AddElementComponent
  },
  {
    path:"show",
    component:ShowItemsComponent,
  },
  {
    path:"show/:id",
    component:ShowItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
