import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }
  @Input() showCancel;
  @Output() cancel = new EventEmitter()
  ngOnInit() {
  }
  onCancel() {
    this.cancel.emit()
  }

}
