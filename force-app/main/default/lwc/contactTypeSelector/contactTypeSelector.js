/**
 * Created by bjohnson on 10/10/23.
 */

import {LightningElement} from 'lwc';

export default class ContactTypeSelector extends LightningElement {
    display = 'tile';

    get options(){
        return [
            {label: 'Data Table', value: 'table'},
            {label: 'Tiles', value: 'tile'}
        ]
    }

    handleChange(event){
        this.display = event.target.value;

    }

    get showTiles(){
        return this.display === 'tile';
    }



}