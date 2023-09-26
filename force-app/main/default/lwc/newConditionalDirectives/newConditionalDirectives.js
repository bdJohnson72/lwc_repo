/**
 * Created by bjohnson on 9/24/23.
 */

import {LightningElement} from 'lwc';

export default class NewConditionalDirectives extends LightningElement {
    showText = false;

    showTextHandler(){
        this.showText = !this.showText;
    }

    get getLabel(){
        return this.showText ? 'Hide Text' : 'Show Text';
    }

}