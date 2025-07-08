import { LightningElement } from 'lwc';
import getRecords from '@salesforce/apex/imperativeLWC.getRecords';
import Custom_button_label from '@salesforce/label/c.Custom_button_label'; //importing custom label
export default class ImperativeApexCMP extends LightningElement {
    label={Custom_button_label};

    onClickHandler() {
        
        //getRecords().then(function(res){ //in imperative have to call the function into the function
        getRecords().then(res=>{  //1st using function word 2nd this fat arrow fucntion we can write this way aslo 
           alert('Result from fat arrow: ' +JSON.stringify(res)); //res name can be anything we pass this res it store the list of objects records

        }).catch(error=>{
             alert('error: ' +error);

       })
    }
    //this is async code
     async onClickHandler() {
        //getRecords().then(function(res){ //in imperative have to call the function into the function
       await getRecords() //1st using function word 2nd this fat arrow fucntion we can write this way aslo 
        alert('await get Records: ' +JSON.stringify(await getRecords()));

    }
}