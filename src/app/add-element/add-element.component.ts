import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpConnectService } from '../http-connect.service';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {
  /**form to add new item */
  addElement:FormGroup;

  /**document file */
  docFile:File = null

  /**image file */
  imageFile:File = null

  /**video file */
  videoFile:File = null

  /**form data which will be passed to API */
  fd:FormData = new FormData()

  /**show spinner or not */
  showSpinner:boolean = false;

  /** error message when error occures */
  error = null

  /** success message when process done */
  success = null

  /** error when upload invalid image */
  errorImage:boolean = false;

  /** error when upload invalid video */
  errorVideo:boolean = false;

  /** error when upload invalid document */
  errorDoc:boolean = false;

  /**subscription hold add item subscribe */
  addSubscription:Subscription

  /**
   * Constructor
   * @param httpConnectService injected value to access HttpConnectService service
   */
  constructor(private httpConnectService:HttpConnectService) { }

  /**
   * On Init Life Cycle Hook
   */
  ngOnInit() {
    // initail the form
    this.addElement = new FormGroup({
      "title":new FormControl("", Validators.required),
      "subject":new FormControl("", [Validators.required, Validators.minLength(10)])
    })
  }
  /**
   * Trigger on submit form
   */
  onSubmit() {
    // add angular form to form data
    this.fd.append("title", this.addElement.get('title').value )
    this.fd.append("subject", this.addElement.get('subject').value  )
    
    this.showSpinner = true;
    // connect service to add item 
    this.addSubscription = this.httpConnectService.addItem(this.fd)
    .subscribe(data => {
      // added successfully
      console.log(data);
      this.showSpinner = false;
      this.success = "Successfully element added"
      
    },err => {
      // error when addding
      console.error(err);
      this.showSpinner = false;
      this.error = err.message
    })
    // console.log(this.addElement);
    
  }

/**
 * Trigger when file selected
 * @param event file information
 * @param status file type (image, document or video)
 */
  onFileSelected(event, status:string) {
    // get selected file
    let selectedFile = event.target.files[0];
    switch(status) {
      case "image" :
        // file status is image
        if (selectedFile.type.search("image") > -1) {
          // valid image
          this.imageFile = selectedFile
          // add image file to form data
          this.fd.append("photo", this.imageFile)
          this.success = "Successfuly image uploaded";
          this.errorImage = false
        } else {
          // invalid image
          this.error = "Must upload valid image";
          this.errorImage = true
        }
        break
      case "document" :
        // console.log(selectedFile.type);
        // file status is document
        if (selectedFile.type.search(/doc|docx|xls|xlsx|ppt|pptx|txt|text|pdf/) > -1) {
          // valid document
          this.docFile = selectedFile
          // add document file to form data
          this.fd.append("doc", this.docFile)
          this.success = "Successfuly document uploaded";
          this.errorDoc = false
        } else {
          // invalid document
          this.error = "Must upload valid document";
          this.errorDoc = true
        }
        
        break
      case "video" :
        // file status is video
        if (selectedFile.type.search("video") > -1) {
          // valid video
          this.videoFile = selectedFile
          // add video file to form data
          this.fd.append("video", this.videoFile)
          this.success = "Successfuly video uploaded";
          this.errorVideo = false
        } else {
          // invalid video
          this.error = "Must upload valid video";
          this.errorVideo = true
        }
        break
    }
    // console.log(this.imageFile);
    // console.log(this.docFile);
    // console.log(this.videoFile);

  }

  /**
   * Trigger when cancel adding process
   */
  onCancelAdd() {
    this.addSubscription.unsubscribe()
    this.showSpinner = false
  }


}
