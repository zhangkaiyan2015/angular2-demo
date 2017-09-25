import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-myappoint',
  templateUrl: './myappoint.component.html',
  styleUrls: ['./myappoint.component.css']
})
export class MyappointComponent implements OnInit {

  constructor(private location: Location) { }
  ngOnInit() {
  }
  gotoback() {
    this.location.back();
  }

}
