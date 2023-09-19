/**
 * Created by bjohnson on 9/19/23.
 */

import {LightningElement} from 'lwc';

export default class RefsDemo extends LightningElement {

    handleSubmit(){
       const name = this.refs.name.value
       const age = this.refs.age.value
       this.refs.response_ref.innerHTML = `<p>${name} ${age}</p>`
    }

}