import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.css']
})
export class AppointComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  gotoback() {
    this.location.back();
  }
}
