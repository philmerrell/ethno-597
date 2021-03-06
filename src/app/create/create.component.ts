import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoomiFilterDialogComponent } from '@app/shared/boomi-filter-dialog/boomi-filter-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'anms-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  activityFeedInputGroup: FormGroup;
  channelGroup: FormGroup;
  topicInputGroup: FormGroup;
  smsInputGroup: FormGroup;
  pushNotificationInputGroup: FormGroup;
  emailContent = '';



  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    this.channelGroup = this.fb.group({
      channel: ['', Validators.required]
    });



    this.topicInputGroup = this.fb.group({
      name: ['', Validators.required]
    });

    this.smsInputGroup = this.fb.group({
      message: ['', Validators.required]
    });

    this.activityFeedInputGroup = this.fb.group({
      headline: ['Annual Engineering and Science Festival is Feb. 3', Validators.required],
      description: ['All events are free and the festival is being held as an open house; ' +
      'the public is invited to come any time between 9 a.m.-4 p.m.', Validators.required],
      mediaType: ['', Validators.required],
      imageUrl: ['https://news.boisestate.edu/update/files/2017/01/EngineeringScienceRobot620x320-500x258.jpg'],
      linkUrl: ['']
    });

    this.pushNotificationInputGroup = this.fb.group({
      title: ['Final Grade', Validators.required],
      message: ['Your final grade for ETHNO 597 is now available.', Validators.required],
    });
  }

  openBoomiFilterDialog(): void {
    const dialogRef = this.dialog.open(BoomiFilterDialogComponent, {
      width: '800px'
    });
  }

}
