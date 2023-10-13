/**
 * Created by brooks.johnson on 11/17/2022.
 */

import {LightningElement, api } from 'lwc';
import LightningConfirm from "lightning/confirm";

export default class RecordCardQuickFiles extends LightningElement {

    @api
    recordId;
   async  onDeleteAllFilesButtonClick() {
        // eslint-disable-next-line no-alert,no-restricted-globals
        const result = await LightningConfirm.open({
            message: 'Are you sure you want to delete all files?',
            variant: 'headerless',
            label: 'Are you sure you want to delete all files?',
            // setting theme would have no effect
        });
    }

}