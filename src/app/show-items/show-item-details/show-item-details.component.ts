import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpConnectService } from 'src/app/http-connect.service';

@Component({
  selector: 'app-show-item-details',
  templateUrl: './show-item-details.component.html',
  styleUrls: ['./show-item-details.component.css']
})
export class ShowItemDetailsComponent implements OnInit {
  /** to store element id */
  id:number

  /** show spinner or not */
  showSpinner:boolean = false

  /** item data from API */
  itemDetails;

  /** item photo from api */
  photo;

   /** item video from api */
  video;

   /** item document from api */
  file;

  /** error message when error occures */
  error = null;

  /**
   * Constructor
   * @param httpConnectService injected value to access HttpConnectService service
   * @param route to access ActivatedRoute
   */
  constructor(private httpConnectService:HttpConnectService,
            private route: ActivatedRoute) { }

  /**
   * On Init Life Cycle Hook
   */
  ngOnInit() {

    // get id from route parameter
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']
    })
    this.showSpinner = true
    // get item details
    this.httpConnectService.getItemDetails(this.id).subscribe(
      data => {

        this.itemDetails = data.data
        const medias = this.itemDetails.medias
        // get photo, video and document from response
        medias.forEach(media => {
          if (media.type === "photo") {
            this.photo = media
          } else if (media.type === "video") {
            this.video = media
          } else if (media.type === "file") {
            this.file = media
            console.log(this.file);
            
          }
        })
        this.showSpinner = false
        // console.log(this.itemDetails);
        
        
      },
      err => {
        console.error(err)
        this.error = err.message
        this.showSpinner = false
      }
    )
  }

}
