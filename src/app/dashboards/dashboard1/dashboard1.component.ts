import {Component, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit {
  constructor(private router: Router) {
    if (!localStorage.getItem('token') || !localStorage.getItem('login')) {
      this.router.navigate(['/authentication/login']);
      localStorage.clear();
    }
  }

  ngAfterViewInit() {
  }
}
