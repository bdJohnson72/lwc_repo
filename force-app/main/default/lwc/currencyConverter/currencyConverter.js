/**
 * Created by bjohnson on 7/17/23.
 */

import {LightningElement} from 'lwc';
import {countryCodeList} from  "c/countryCode";

export default class CurrencyConverter extends LightningElement {
    countryCodeList = countryCodeList;
    countryFrom = 'USD';
    countryTo = 'AUD';

    handleChange(event) {
        const {name, value} = event.target;
        console.log('name: ' + name);
        console.log('value: ' + value);
    }

}