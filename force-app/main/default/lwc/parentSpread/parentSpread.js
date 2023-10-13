/**
 * Created by bjohnson on 7/18/23.
 */

import {LightningElement} from 'lwc';

export default class ParentSpread extends LightningElement {


    data = {
        percentage: 20,
        name: 'Brooks',
    };
    handleChange(event) {

       this.data = {percentage: event.target.value};
    }

}