/**
 * Created by brooks.johnson on 7/7/2022.
 */

import {LightningElement, api} from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent";
import {CloseActionScreenEvent} from "lightning/actions";
import STATUS from '@salesforce/schema/Case.Status'

export default class CaseAction extends LightningElement {

    objectApiName = 'Case';
    fields = [STATUS];

    handleSuccess(){
        console.log('success')
    }

}