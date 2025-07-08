import { LightningElement , track} from 'lwc';

export default class LoopingAndIteration extends LightningElement {
   @track cityList= ['Mumbai' , 'Pune' , 'Nagpur' , 'Kolkata' , 'Chennai'];
    addCity= '';
    addNewCity=[];

    onchangeHandler(evt) {
        this.addCity = evt.target.value;

    }
    onClickHandler() {
        
        this.addCity = this.addNewCity;


    }
}