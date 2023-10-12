/**
 * Created by bjohnson on 9/27/23.
 */

import {LightningElement, wire} from 'lwc';
import fetchContacts from '@salesforce/apex/ContactController.fetchContacts'
const colums = [
    {label: 'First Name', fieldName: "FirstName", type: "text"},
    {label: "Last Name", fieldName: "LastName", type: "text"},
    {label: "Email", fieldName: "Email", type: "email"},
    {label: "Phone", fieldName: "Phone", type: "phone"}
]
export default class ContactDataTable extends LightningElement {


    contacts;
    columns = colums;

    @wire(fetchContacts)
    wiredContacts({data, error}){
        if (data){
            this.contacts = data;
        }else {
            console.error(error)
        }
    }

}