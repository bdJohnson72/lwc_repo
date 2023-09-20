/**
 * Created by bjohnson on 9/19/23.
 */

import {LightningElement} from 'lwc';
import {RefreshEvent} from "lightning/refresh";
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'
export default class RefreshViewStandard extends LightningElement {
    nameField = NAME_FIELD
    phoneField = PHONE_FIELD
    emailField = EMAIL_FIELD
    accountField = ACCOUNT_FIELD

    handleSuccess(event){
        console.log(`Contact created ${event.detail.id}`)
        this.dispatchEvent(new RefreshEvent());
        this.resetFields();
    }

    resetFields(){
        console.log('called reset method')
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if (inputFields){
            inputFields.forEach(field => {
                field.reset();
            })
        }
    }



}