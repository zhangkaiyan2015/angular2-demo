import { AppointSuccessComponent } from './me/appoint/appoint-success/appoint-success.component';
import { DoctorComponent } from './me/appoint/doctor/doctor.component';
import { AppointTimeComponent } from './me/appoint/appoint-time/appoint-time.component';
import { AppointComponent } from './me/appoint/appoint.component';
import { WithdrawComponent } from './me/mywallet/withdraw/withdraw.component';
import { RechargeComponent } from './me/mywallet/recharge/recharge.component';
import { DetailComponent } from './me/mywallet/detail/detail.component';
import { AddressEditComponent } from './me/userinfo/address/address-edit/address-edit.component';
import { AddressComponent } from './me/userinfo/address/address.component';
import { IdnumberComponent } from './me/userinfo/idnumber/idnumber.component';
import { TelephoneComponent } from './me/userinfo/telephone/telephone.component';
import { UsernameComponent } from './me/userinfo/username/username.component';
import { MyappointComponent } from './me/myappoint/myappoint.component';
import { MywalletComponent } from './me/mywallet/mywallet.component';
import { UserinfoComponent } from './me/userinfo/userinfo.component';
import { ClinicDetailComponent } from './clinic/clinic-detail/clinic-detail.component';
import { MoreComponent } from './more/more.component';
import { DeviceComponent } from './device/device.component';
import { ClinicComponent } from './clinic/clinic.component';
import { MeComponent } from './me/me.component';
import { TabsComponent } from './tabs.component';
import { Routes } from '@angular/router';
export const tabRouters: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            { path: '', redirectTo: 'me', pathMatch: 'full' },
            { path: 'me', component: MeComponent },
            { path: 'userinfo', component: UserinfoComponent },
            { path: 'username', component: UsernameComponent },
            { path: 'telephone', component: TelephoneComponent },
            { path: 'idnumber', component: IdnumberComponent },
            { path: 'address', component: AddressComponent },
            { path: 'address-edit', component: AddressEditComponent },
            { path: 'mywallet', component: MywalletComponent },
            { path: 'mywallet-detail', component: DetailComponent },
            { path: 'mywallet-recharge', component: RechargeComponent },
            { path: 'mywallet-withdraw', component: WithdrawComponent },
            { path: 'myappoint', component: MyappointComponent },
            { path: 'appoint-doctor', component: AppointComponent },
            { path: 'appoint-time', component: AppointTimeComponent },
            { path: 'appoint-success', component: AppointSuccessComponent },
            { path: 'doctor', component: DoctorComponent },
            { path: 'clinic', component: ClinicComponent },
            { path: 'clinic-detail', component: ClinicDetailComponent },
            { path: 'device', component: DeviceComponent },
            { path: 'more', component: MoreComponent }
        ]
    }
];
