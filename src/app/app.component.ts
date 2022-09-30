import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  public faCoffee = faCoffee;
  constructor(
    private router: Router,
    public iconSet: IconSetService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
