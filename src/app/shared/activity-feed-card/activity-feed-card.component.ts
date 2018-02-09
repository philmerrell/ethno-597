import { Component, OnInit, Input } from '@angular/core';
import { ActivityFeedItem } from './activity-feed-card.model';

@Component({
  selector: 'anms-activity-feed-card',
  templateUrl: './activity-feed-card.component.html',
  styleUrls: ['./activity-feed-card.component.scss']
})
export class ActivityFeedCardComponent implements OnInit {

  @Input() content: ActivityFeedItem;

  constructor() { }

  ngOnInit() {
  }

}
