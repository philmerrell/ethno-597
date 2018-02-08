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
    { link: 'stock-market', label: 'Push Notification' },
    { link: 'theming', label: 'Email' }
  ];

  constructor() {}

  ngOnInit() {}
}
