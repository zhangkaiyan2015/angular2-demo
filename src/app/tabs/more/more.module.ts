import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MoreComponent]
})
export class MoreModule { }
