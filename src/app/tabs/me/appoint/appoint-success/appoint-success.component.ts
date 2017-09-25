import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoint-success',
  templateUrl: './appoint-success.component.html',
  styleUrls: ['./appoint-success.component.css']
})
export class AppointSuccessComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }
  gotoback() {
    this.location.back();
  }
  gotoUrl() {
    // 重定向
    this.location.replaceState('/');
    this.router.navigate(['/myappoint']);
  }
}
