import { LightningElement , api} from 'lwc';

export default class StudentsInfoChild extends LightningElement {

     @api studentsInfo;
     //studentsInfo={name='sakshi',age=23,rollNumber='101'}

     tileClickHandler(){
         // alert('tile Click Handler');
           const selectEvent = new CustomEvent('tileclick', {detail: this.studentsInfo});
       this.dispatchEvent(selectEvent);
    }
}