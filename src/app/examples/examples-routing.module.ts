import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplesComponent } from './examples/examples.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { ParentComponent } from './theming/parent/parent.component';
import { ActivityFeedComponent } from '@app/examples/activity-feed/activity-feed.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'activity-feed',
        pathMatch: 'full'
      },
      {
        path: 'activity-feed',
        component: ActivityFeedComponent,
        data: {
          title: 'Example: Activity Feed'
        }
      },
      {
        path: 'stock-market',
        component: StockMarketComponent,
        data: {
          title: 'Example: Push Notification'
        }
      },
      {
        path: 'theming',
        component: ParentComponent,
        data: {
          title: 'Example: Email'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
