import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DeviceComponent]
})
export class DeviceModule { }
