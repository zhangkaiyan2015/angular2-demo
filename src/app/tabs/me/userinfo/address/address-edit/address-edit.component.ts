import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  constructor(private location: Location) { }
    ngOnInit() {
    }
    gotoback() {
      this.location.back();
    }

}
