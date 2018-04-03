import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'anms-boomi-filter-dialog',
  templateUrl: './boomi-filter-dialog.component.html',
  styleUrls: ['./boomi-filter-dialog.component.scss']
})
export class BoomiFilterDialogComponent implements OnInit {
  targetGroup: FormGroup;

  targets = {
    colleges: [ 'College of Arts and Sciences', 'College of Engineering', 'College of Business and Economics' ],
    majors: ['Computer Science', 'Communication', 'Business', 'Spanish', 'Anthropology'],
    residence: ['On Campus', 'Off Campus'],
    employees: ['Faculty', 'Staff'],
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.targetGroup = this.fb.group({
      colleges: [''],
      majors: [''],
      gpaMin: [0.0, [Validators.min, Validators.max]],
      gpaMax: [4.0, [Validators.min, Validators.max]]

    });
  }

}
