/**
 * Created by bjohnson on 7/15/23.
 */

import {LightningElement, api} from 'lwc';

export default class DropDown extends LightningElement {
    @api options = [];
    @api label = '';
    @api id = '';

    changeHandler(event) {
        console.log(event.target.value);
        this.dispatchEvent(new CustomEvent('changeselect', {
            detail: {
                label: this.label,
                value: event.target.value,
            }

        }));

    }

    @api
    reset(value) {
        this.template.querySelector('select').value = value;
        this.dispatchEvent(new CustomEvent('changeselect', {
            detail: {
                label: this.label,
                value: value,
            }
        }))
    }
}