/**
 * Created by bjohnson on 7/18/23.
 */

import {LightningElement, api} from 'lwc';

export default class ChildSpread extends LightningElement {
    @api percentage;
    @api name;
    get style() {
        return `background-color: red; min-height:50px; width: ${this.percentage}%;`;
    }

}