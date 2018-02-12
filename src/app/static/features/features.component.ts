import { Component, OnInit, OnDestroy } from '@angular/core';

import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ActivityFeedItem } from '@app/shared/activity-feed-card/activity-feed-card.model';

@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  versions = env.versions;
  sb;
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

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.openSnackBar();
  }

  ngOnDestroy() {
    this.sb.dismiss();
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  openSnackBar() {
    this.sb = this.snackBar.open('View basic analytics about your communications.', 'Okay');
  }

}
