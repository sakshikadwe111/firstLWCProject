import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
export default class LdsLwcCMP extends LightningElement {
oppName;
oppStageName;
oppClosedData;

onChangeHandler(evt){
    const intLabel = evt.target.label;
    intLabel == 'Name' ? this.oppName = evt.target.value :null; //before mark would condition ? afer mark would be out put after : colon define value would be false 
    intLabel == 'Stage Name' ? this.oppStageName = evt.target.value :null;
    intLabel == 'Closed Data' ? this.oppClosedData = evt.target.value :null;
} 
onClickHandler(){

    const objFields ={"Name": this.oppName, "StageName": this.oppStageName, "CloseDate": this.oppClosedData};
    const recordObj={"apiName": "Opportunity","fields": objFields}
    createRecord(recordObj)
    .then(result=>{ //handling promise using then and catch result store in then error would store in catch
        alert('result: ' +JSON.stringify(result));
        console.log('result: ' +JSON.stringify(result));

    }).catch()

    }
}
