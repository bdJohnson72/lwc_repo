/**
 * Created by bjohnson on 9/27/23.
 */

import {LightningElement, wire } from 'lwc';
import fetchContacts from '@salesforce/apex/ContactController.fetchContacts'

export default class ContactTiles extends LightningElement {
 contacts;

    @wire(fetchContacts)
    wiredContacts({data, error}){
        if (data){
            this.contacts = data;
        }else {
            console.log(`Error : ${error}`)
        }
    }
}