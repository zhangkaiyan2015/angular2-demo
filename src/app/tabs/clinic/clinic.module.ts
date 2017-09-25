import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicComponent } from './clinic.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ClinicComponent, ClinicDetailComponent]
})
export class ClinicModule { }
