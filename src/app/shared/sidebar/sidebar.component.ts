import {Component, AfterViewInit, OnInit} from '@angular/core';
import {RouteInfo} from './sidebar.metadata';
import {ROUTES} from './menu-items';

import {Router, ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WheezyService} from '../../../provider/wheezy.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any;

  public menuData: any;

  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute, private wheezyService: WheezyService
  ) {
  }

  // End open close
  ngOnInit() {

    this.wheezyService.get$('menu').subscribe(response => {
      this.menuData = response;
      this.sidebarnavItems = response;
      console.log(this.sidebarnavItems);

    });
    // this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}
