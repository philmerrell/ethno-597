import { Component, OnInit } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerJourneyMapComponent } from '@app/static/customer-journey-map/customer-journey-map.component';
import { InnovationVennDiagramComponent } from '@app/static/innovation-venn-diagram/innovation-venn-diagram.component';
import { PersonasComponent } from '@app/static/personas/personas.component';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  loading = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openCustomerJourneyMap(): void {
    const dialogRef = this.dialog.open(CustomerJourneyMapComponent, {
      width: '800px'
    });
  }

  openInnovationVennDiagram(): void {
    const dialogRef = this.dialog.open(InnovationVennDiagramComponent, {
      width: '800px'
    });
  }

  openPersonas(): void {
    const dialogRef = this.dialog.open(PersonasComponent, {
      width: '800px'
    });
  }

  testLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
