import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routerTransition]
})
export class ExamplesComponent implements OnInit {
  examples = [
    { link: 'activity-feed', label: 'Activity Feed' },
    { link: 'push-notifications', label: 'Push Notification' },
    { link: 'email', label: 'Email' },
    { link: 'sms', label: 'SMS' }
  ];

  constructor() {}

  ngOnInit() {}
}
