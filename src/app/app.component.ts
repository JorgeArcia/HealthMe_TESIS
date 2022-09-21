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
  showOperatorHeader : boolean = false;
  showProfessionalHeader : boolean = false;
  showPatientHeader : boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe( event => {
      if(event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild?.snapshot.data['showHeader'];
        this.showAdminHeader = this.activatedRoute.firstChild?.snapshot.data['showAdminHeader'];
        this.showOperatorHeader = this.activatedRoute.firstChild?.snapshot.data['showOperatorHeader'];
        this.showProfessionalHeader = this.activatedRoute.firstChild?.snapshot.data['showProfessionalHeader'];
        this.showPatientHeader = this.activatedRoute.firstChild?.snapshot.data['showPatientHeader'];
      }
    });
  }

}
