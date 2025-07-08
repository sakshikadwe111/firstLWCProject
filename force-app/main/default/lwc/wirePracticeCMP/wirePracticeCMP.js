import { LightningElement, wire, track } from 'lwc';
import getAccountRecords from '@salesforce/apex/wireLWC.getAccountRecords';
export default class WirePracticeCMP extends LightningElement {
   @track lstAccounts;
   @track error;
   accCount;
   @wire(getAccountRecords, {count:'$accCount' ,name: '$accCount'}) wiredAccRecords;
    //wire as property//N numbers of paarmeter pass as object no matter how much parameter it would be
    //@wire(getAccountRecords) wiredAccRecords({error , data}){ //wire as function
    //made function into object xyz({ss}){}

   //if (data) {
           //this.lstAccounts = data;
       //} else if (error) {
         //  this.error = error;
      // }
  //} 
  
   onClickhandler(){
   this.accCount = this.template.querySelector('lightning-input').value;
   alert('accCount ' +this.accCount);
 }
}