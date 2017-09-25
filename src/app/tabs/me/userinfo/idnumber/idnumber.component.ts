import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-idnumber',
  templateUrl: './idnumber.component.html',
  styleUrls: ['./idnumber.component.css']
})
export class IdnumberComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  gotoback() {
    this.location.back();
  }

}
