import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-appoint-time',
  templateUrl: './appoint-time.component.html',
  styleUrls: ['./appoint-time.component.css']
})
export class AppointTimeComponent implements OnInit {
  public currentId = 1;
  public isHiddenInfo = true;
  public isHiddenNum = true;
  constructor(private location: Location) { }
  ngOnInit() {
  }
  gotoback() {
    this.location.back();
  }
  checkappoint(appointId) {
    this.currentId = appointId;
    this.isHiddenNum = false;
  }
  hidden() {
    this.isHiddenInfo = true;
    this.isHiddenNum = true;
  }
}
