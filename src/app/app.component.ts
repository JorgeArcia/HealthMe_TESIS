import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showHeader : boolean = true;
  showAdminHeader : boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const showHeaderStatus = ''; //this.activatedRoute.firstChild?.snapshot.data.showHeader;
    //const showAdminHeaderStatus = this.activatedRoute.firstChild?.snapshot.data.showAdminHeader;

    this.router.events.subscribe( event => {
      if(event instanceof NavigationEnd) {
        this.showHeader = true;
        //this.showAdminHeader = showAdminHeaderStatus;
      }
    });
  }

}
