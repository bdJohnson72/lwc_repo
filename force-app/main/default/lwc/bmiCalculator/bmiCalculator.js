/**
 * Created by bjohnson on 5/5/23.
 */

import {LightningElement} from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = '';
    weight = '';
    bmi = '';

    handleInputChange(event) {
        const {name, value} = event.target;
        this[name] = value;
    }

    calculateBmi(event) {
        event.preventDefault();
       this.bmi = (Number(this.weight) / (Number(this.height * this.height))).toFixed(2) * 703;
        console.log(this.bmi);
    }

    handleRecalculate() {
        this.bmi = '';
        this.height = '';
        this.weight = '';
    }

}