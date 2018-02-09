import { Component, OnInit } from '@angular/core';
import { ActivityFeedItem } from '@app/shared/activity-feed-card/activity-feed-card.model';

@Component({
  selector: 'anms-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})
export class ActivityFeedComponent implements OnInit {

  cards: ActivityFeedItem[] = [
    {
      title: 'Annual Engineering and Science Festival is Feb. 3',
      target: 'College of Engineering',
      summary: 'All events are free and the festival is being held as an open house; the public is invited ' +
      'to come any time between 9 a.m.-4 p.m.',
      imageUrl: 'https://news.boisestate.edu/update/files/2017/01/EngineeringScienceRobot620x320-500x258.jpg',
      linkeUrl: ''
    },
    {
      title: 'Boise State Unveils New School of the Arts',
      target: 'College of Arts and Sciences',
      summary: 'Debuting this fall, the new school encompasses music, art, creative writing and theatre arts.',
      imageUrl: 'https://focus.boisestate.edu/wp-content/uploads/2017/12/D_1208_055_055-copy.png',
      linkeUrl: ''
    },
    {
      title: 'Hermida, Coleman Lead The Way In Win',
      target: 'Women\'s Basketball',
      summary: 'Marta Hermida (26 points), A\'Shanti Coleman (15) have career nights in 91-85 win over New Mexico',
      imageUrl: 'http://grfx.cstv.com/photos/schools/bosu/sports/w-baskbl/auto_bsi_wide/13102400.jpeg',
      linkeUrl: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
