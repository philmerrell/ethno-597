import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anms-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
