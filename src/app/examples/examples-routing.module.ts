import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplesComponent } from './examples/examples.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { ParentComponent } from './theming/parent/parent.component';
import { ActivityFeedComponent } from '@app/examples/activity-feed/activity-feed.component';
import { PushNotificationsComponent } from '@app/examples/push-notifications/push-notifications.component';
import { SmsComponent } from '@app/examples/sms/sms.component';
import { EmailComponent } from '@app/examples/email/email.component';

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
        path: 'push-notifications',
        component: PushNotificationsComponent,
        data: {
          title: 'Example: Push Notification'
        }
      },
      {
        path: 'email',
        component: EmailComponent,
        data: {
          title: 'Example: Email'
        }
      },
      {
        path: 'sms',
        component: SmsComponent,
        data: {
          title: 'Example: SMS'
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
