import { Component, OnInit } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerJourneyMapComponent } from '@app/static/customer-journey-map/customer-journey-map.component';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openCustomerJourneyMap(): void {
    const dialogRef = this.dialog.open(CustomerJourneyMapComponent, {
      width: '800px'
    });

  }
}
