import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class HttpConnectService {
    constructor(private _http:HttpClient) {}
    /**Api url to get all items */
    private urlGetAllItems = "http://58one54zero.joybox-me.com/api/blogs-flutter-task";

    /**Api url to add new item */
    private urlAddItem = "http://58one54zero.joybox-me.com/api/store-blog-flutter-task";

    /** Api url to get itm details */
    private urlGetDetails = "http://58one54zero.joybox-me.com/api/blog-flutter-task"

    /**
     * To get all items
     * @returns observale hold all items data
     */
    getAllItems():Observable<any> {
        return this._http.get(this.urlGetAllItems)
    }

    /**
     * To get item details
     * @param id item id
     * @returns observale hold item details
     */
    getItemDetails(id):Observable<any> {
        return this._http.get(this.urlGetDetails, {
            params:new HttpParams().set("id", id)
        })
    }

    /**
     * To add new item
     * @param formData form data which will be passed to API
     * @returns observale hold process result
     */
    addItem(formData:FormData):Observable<any>{
        return this._http.post(this.urlAddItem, formData)
    }

}