import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchComponent implements OnInit {
  @Input() checked = false;
  @Input() color = 'primary';
  @Input() disabled = false;

  @Output() change: EventEmitter<MatSlideToggleChange>
    = new EventEmitter<MatSlideToggleChange>();
  constructor() { }

  ngOnInit() {
  }

}
