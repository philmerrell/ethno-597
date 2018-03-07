import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { DetailComponent } from './detail/detail.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CustomerJourneyMapComponent } from '@app/static/customer-journey-map/customer-journey-map.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule, ChartsModule ],
  declarations: [AboutComponent, FeaturesComponent, DetailComponent, CustomerJourneyMapComponent],
  entryComponents: [CustomerJourneyMapComponent]
})
export class StaticModule {}
