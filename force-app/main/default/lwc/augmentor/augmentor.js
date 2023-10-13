/**
 * Created by brooks.johnson on 7/5/2022.
 */

import {LightningElement} from 'lwc';

export default class Augmentor extends LightningElement {

    startCounter = 0;

    handleStartChange(event) {
        this.startCounter = parseInt(event.target.value);
    }

    handleMaximizeCounter(){
        this.template.querySelector('c-numerator').maximizeCounter();
    }

}