import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.component.html',
  styleUrls: ['./mywallet.component.css']
})
export class MywalletComponent implements OnInit {
  public isHiddenPro = true;
  public isHiddenWithdraw = true;
  public promiseAccount = 0;
  constructor(private location: Location, private router: Router) { }
  ngOnInit() {
  }
  gotoback() {
    this.location.back();
  }
  getProStatus() {
    if (this.promiseAccount === 0) {
      this.isHiddenWithdraw = false;
    } else {
      this.isHiddenPro = false;
    }
  }
  gotoPro() {
    this.router.navigate(['/mywallet-withdraw']);
  }
  hiddenPro() {
    this.isHiddenPro = true;
  }
  cancelBtn() {
    this.isHiddenWithdraw = true;
  }
}
