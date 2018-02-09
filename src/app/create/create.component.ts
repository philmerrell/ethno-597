import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'anms-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  activityFeedInputGroup: FormGroup;
  channelGroup: FormGroup;
  targetGroup: FormGroup;
  emailContent = '';

  targets = {
    colleges: [ 'College of Arts and Sciences', 'College of Engineering', 'College of Business and Economics' ],
    majors: ['Computer Science', 'Communication', 'Business', 'Spanish', 'Anthropology'],
    residence: ['On Campus', 'Off Campus'],
    employees: ['Faculty', 'Staff'],
  };

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.channelGroup = this.fb.group({
      channel: ['', Validators.required]
    });

    this.targetGroup = this.fb.group({
      target: ['', Validators.required]
    });

    this.activityFeedInputGroup = this.fb.group({
      headline: ['Annual Engineering and Science Festival is Feb. 3', Validators.required],
      description: ['All events are free and the festival is being held as an open house; ' +
      'the public is invited to come any time between 9 a.m.-4 p.m.', Validators.required],
      mediaType: ['', Validators.required],
      imageUrl: ['https://news.boisestate.edu/update/files/2017/01/EngineeringScienceRobot620x320-500x258.jpg'],
      linkUrl: ['']
    });
  }

  openSnackBar() {
    this.snackBar.open('Success. Now you can view basic analytics about your communications.', 'Okay');
  }


}
