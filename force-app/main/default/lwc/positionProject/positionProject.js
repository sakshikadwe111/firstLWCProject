import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class PositionForm extends LightningElement {
    posTitle;
    posStatus;
    posType;
    posArea;
    posLevel;
    posLocation;
    posOpenDate;
    posCloseDate;
    posMinPay;
    posMaxPay;
    posDescription;
    posResponsibilities;
    posSkills;
    posEducation;

    statusOptions = [
        { label: 'New Position', value: 'New Position' },
        { label: 'Open', value: 'Open' },
        { label: 'Closed', value: 'Closed' }
    ];

    typeOptions = [
        { label: 'Full Time', value: 'Full Time' },
        { label: 'Part Time', value: 'Part Time' }
    ];

    areaOptions = [
        { label: 'IT', value: 'IT' },
        { label: 'HR', value: 'HR' },
        { label: 'Sales', value: 'Sales' }
    ];

    levelOptions = [
        { label: 'Entry', value: 'Entry' },
        { label: 'Mid', value: 'Mid' },
        { label: 'Senior', value: 'Senior' }
    ];

    handleChange(event) {
        const label = event.target.label;
        console.log("label: " +label+ "value: " +event.target.Name);
        

        label === 'Position Title' ? this.posTitle = event.target.value : null;
       /* label === 'Status' ? this.posStatus = event.target.value : null;
        label === 'Type' ? this.posType = event.target.value : null;
        label === 'Functional Area' ? this.posArea = event.target.value : null;
        label === 'Job Level' ? this.posLevel = event.target.value : null;
        label === 'Location' ? this.posLocation = event.target.value : null;
        label === 'Open Date' ? this.posOpenDate = event.target.value : null;
        label === 'Close Date' ? this.posCloseDate = event.target.value : null;
        label === 'Min Pay' ? this.posMinPay = event.target.value : null;
        label === 'Max Pay' ? this.posMaxPay = event.target.value : null;
        label === 'Job Description' ? this.posDescription = event.target.value : null;
        label === 'Responsibilities' ? this.posResponsibilities = event.target.value : null;
        label === 'Skills Required' ? this.posSkills = event.target.value : null;
        label === 'Educational Requirements' ? this.posEducation = event.target.value : null;*/
    }

    handleSave() {
       const Posfields = {
            Position_Title__c: this.posTitle 
          /*  status__c: this.posStatus,
            Type__c: this.posType,
            Functional_Area__c: this.posArea,
            Job_Level__c: this.posLevel,
            Location__c: this.posLocation,
            Open_Date__c: this.posOpenDate,
           // Hire_By__c: this.hireBy,
            Close_Date__c: this.posCloseDate,
            Min_pay__c: this.posMinPay,
            Max_Pay__c: this.posMaxPay,
            Job_Description__c: this.posDescription,
            Responsibilities__c: this.posResponsibilities,
            Skills_Required__c: this.posSkills,
            Educational_Requirements__c: this.posEducation*/
        };
        const recordObj = {apiName: 'position__c', fields: Posfields};

        createRecord(recordObj)
            .then(result => {
                alert('Record Created: ' + result);
               // console.log('Record Created: ', result);
            })
            .catch(error => {
                alert('Error: ' + error.body.message);
                console.error('Error creating record:', error);
            });
    }
}
