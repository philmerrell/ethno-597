import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { TodosComponent } from './todos/todos.component';
import { todosReducer } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketEffects } from './stock-market/stock-market.effects';
import { StockMarketService } from './stock-market/stock-market.service';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { PhoneShellComponent } from '@app/shared/phone-shell/phone-shell.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { SmsComponent } from './sms/sms.component';
import { EmailComponent } from './email/email.component';


@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      stocks: stockMarketReducer
    }),
    EffectsModule.forFeature([TodosEffects, StockMarketEffects])
  ],
  declarations: [
    ExamplesComponent,
    TodosComponent,
    ParentComponent,
    ChildComponent,
    ActivityFeedComponent,
    PushNotificationsComponent,
    SmsComponent,
    EmailComponent
  ],
  providers: [StockMarketService]
})
export class ExamplesModule {
  constructor() {}
}
