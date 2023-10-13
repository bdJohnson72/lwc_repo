/**
 * Created by brooks.johnson on 7/5/2022.
 */

import {LightningElement, api} from 'lwc';

export default class ButtonBubbles extends LightningElement {
    @api label;
    @api icon;

    handleClick(event){
        this.dispatchEvent(new CustomEvent('buttonclick', {
            bubble: true
        }));
    }

}