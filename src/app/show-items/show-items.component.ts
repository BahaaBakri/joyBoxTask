import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpConnectService } from '../http-connect.service';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {
  /** to get all items data */
  items:[] = [];

  /** error message when error occures */
  error = null;

  /**show spinner or not */
  showSpinner:boolean = false

  /**
   * Constructor
   * @param httpConnectService injected value to access HttpConnectService service
   */
  constructor(private httpConnectService:HttpConnectService) { }

  /**
   * On Init Life Cycle Hook
   */
  ngOnInit() {
    this.showSpinner = true
    // get all items data
    this.httpConnectService.getAllItems().subscribe(data => {
      console.log(data);
      this.items = data.data
      this.showSpinner = false
    }, err => {
      console.error(err);
      this.error = err.message
      this.showSpinner = false
    })
  }

}
