import { LightningElement, track } from 'lwc';

export default class ConditionalRendringCMP extends LightningElement {

        displayDiv= false;
        onClickHandler() {
            this.displayDiv = true;
        }
        @track status = 'Morning';
        onChangeHandler(evt) {
                console.log(evt.target.value);
            this.status = evt.target.value;
       }

       get isMorning() {
        return this.status == 'Morning'
       }
       get isAfternoon() {
         return this.status == 'Afternoon';

      }
}
