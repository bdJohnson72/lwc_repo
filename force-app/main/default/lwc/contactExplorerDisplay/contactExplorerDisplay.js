/**
 * Created by bjohnson on 9/27/23.
 */

import {LightningElement} from 'lwc';
//staticly analyzable imports
const COMPONENT_MAP = {
    //static analyzable improves performance
    tile: ()=> import('c/contactTiles'),
    table: ()=> import('c/contactDataTable'),
    text: ()=>import('c/contactText')
}

export default class ContactExplorerDisplay extends LightningElement {
    value = 'table';
    comp_constructor;
    childProps = {
        message1: 'hello',
        message2: 'components'
    }

    async connectedCallback() {
        //returns a object with component definition
      const component = await COMPONENT_MAP[this.value]();
      this.comp_constructor = component.default;
    }

    async fetchComponent(value){
        const component = await COMPONENT_MAP[this.value]();
        return component.default;
    }

    get options(){
        return [
            {label: 'Data Table', value: 'table'},
            {label: 'Tiles', value: 'tile'},
            {label: 'Text', value: 'text'}
        ]
    }

   async handleChange(event){
        console.log(`target = ${event.target.value}`);
        console.log(`detail = ${event.detail.value}`);
        this.value = event.detail.value;
        const comp = await COMPONENT_MAP[this.value]();
        this.comp_constructor = comp.default;
    }

}