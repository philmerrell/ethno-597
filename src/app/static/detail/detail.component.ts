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
  chart = [];
  data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.activityFeedInputGroup = this.fb.group({
      headline: ['Annual Engineering and Science Festival is Feb. 3', Validators.required],
      description: ['All events are free and the festival is being held as an open house; ' +
      'the public is invited to come any time between 9 a.m.-4 p.m.', Validators.required],
      mediaType: ['', Validators.required],
      imageUrl: ['https://news.boisestate.edu/update/files/2017/01/EngineeringScienceRobot620x320-500x258.jpg'],
      linkUrl: ['']
    });

    const pieChart = new Chart('canvas', {
      type: 'pie',
      data: this.data
  });
  }

}
