import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-model',
  templateUrl: './action-model.component.html',
  styleUrls: ['./action-model.component.css']
})
export class ActionModelComponent implements OnInit {

  constructor() { }

  @Input() message;
  @Input() status;
  @Output() close = new EventEmitter<void>()

  ngOnInit(): void {

  }
  onClose() {
    
    
    this.close.emit()
  }
}
