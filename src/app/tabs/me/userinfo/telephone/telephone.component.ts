import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  gotoback() {
    this.location.back();
  }

}
