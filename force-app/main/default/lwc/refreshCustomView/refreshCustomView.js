/**
 * Created by bjohnson on 9/19/23.
 */

import refreshController from '@salesforce/apex/RefreshController.getAccountRating'
import {registerRefreshHandler, unregisterRefreshHandler} from "lightning/refresh";

import {LightningElement, api} from 'lwc';

export default class RefreshCustomView extends LightningElement {
    @api recordId
    rating
    refreshId;
    connectedCallback() {
        this.refreshId = registerRefreshHandler(this, this.refreshHandler) //context element, provider method
       this.fetchRating()
    }

    disconnectedCallback() {
       unregisterRefreshHandler(this.refreshId)
    }

    async fetchRating(){
        try {
          let account = await refreshController({"accountId": this.recordId})
            this.rating = account[0].Rating
            console.log(account)
        }catch (e){
            console.error(e.message)
        }
    }

    refreshHandler(){
        console.log("Refresh handler called")
        return new  Promise(resolve => {
            this.fetchRating()
            resolve(true)
        })
    }

}