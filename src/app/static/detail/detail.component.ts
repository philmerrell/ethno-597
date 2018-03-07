import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'anms-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  activityFeedInputGroup: FormGroup;
  doughnutChartLabels: string[] = ['Engagement', 'Impressions'];
  doughnutChartData: number[] = [1000, 2000];
  doughnutChartType = 'pie';

  constructor(private fb: FormBuilder) {
    this.activityFeedInputGroup = this.fb.group({
      headline: ['Annual Engineering and Science Festival is Feb. 3', Validators.required],
      description: ['All events are free and the festival is being held as an open house; ' +
      'the public is invited to come any time between 9 a.m.-4 p.m.', Validators.required],
      mediaType: ['', Validators.required],
      imageUrl: ['https://news.boisestate.edu/update/files/2017/01/EngineeringScienceRobot620x320-500x258.jpg'],
      linkUrl: ['']
    });
   }

  ngOnInit() {

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
