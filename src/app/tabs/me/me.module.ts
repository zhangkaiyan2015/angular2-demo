import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from './me.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UsernameComponent } from './userinfo/username/username.component';
import { TelephoneComponent } from './userinfo/telephone/telephone.component';
import { IdnumberComponent } from './userinfo/idnumber/idnumber.component';
import { AddressComponent } from './userinfo/address/address.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { MyappointComponent } from './myappoint/myappoint.component';
import { AddressEditComponent } from './userinfo/address/address-edit/address-edit.component';
import { RechargeComponent } from './mywallet/recharge/recharge.component';
import { WithdrawComponent } from './mywallet/withdraw/withdraw.component';
import { DetailComponent } from './mywallet/detail/detail.component';
import { AppointComponent } from './appoint/appoint.component';
import { DoctorComponent } from './appoint/doctor/doctor.component';
import { AppointTimeComponent } from './appoint/appoint-time/appoint-time.component';
import { AppointSuccessComponent } from './appoint/appoint-success/appoint-success.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MeComponent,
    UserinfoComponent,
    UsernameComponent,
    TelephoneComponent,
    IdnumberComponent,
    AddressComponent,
    MywalletComponent,
    MyappointComponent,
    AddressComponent,
    AddressEditComponent,
    RechargeComponent,
    WithdrawComponent,
    DetailComponent,
    AppointComponent,
    DoctorComponent,
    AppointTimeComponent,
    AppointSuccessComponent
  ]
})
export class MeModule { }
