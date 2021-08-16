import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ActionModelComponent } from '../action-model/action-model.component';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    SpinnerComponent,
    ActionModelComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SpinnerComponent,
    ActionModelComponent,
    
  ]
})
export class SharedModule { }
