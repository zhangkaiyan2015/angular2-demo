import { tabRouters } from './tabs.routing';
import { MoreModule } from './more/more.module';
import { DeviceModule } from './device/device.module';
import { ClinicModule } from './clinic/clinic.module';
import { MeModule } from './me/me.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    RouterModule.forChild(tabRouters),
    CommonModule,
    MeModule,
    ClinicModule,
    DeviceModule,
    MoreModule,
    FormsModule
  ],
  declarations: [TabsComponent],
})
export class TabsModule { }
