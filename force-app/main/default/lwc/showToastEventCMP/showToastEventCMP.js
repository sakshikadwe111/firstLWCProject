import { LightningElement, track } from 'lwc';
import getRecords from '@salesforce/apex/imperativeLWC.getRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastEventCMP extends LightningElement {
    @track result = []; // store list of records //making variable global and reffering into html

    onClickHandler() {
        getRecords()
            .then(res => {
                this.result = res; // fix: use `res` not `accRes`//making variable global and reffering into html
                
                // Show success toast
                const evt = new ShowToastEvent({
                    title: 'Records fetched successfully',
                    message: this.result.length > 0 ? this.result[0].Name : 'No records found',
                    variant: 'success'
                });
                this.dispatchEvent(evt);

                console.log(res);
            })
            .catch(error => {
                // Show error toast
                const evt = new ShowToastEvent({
                    title: 'Error fetching records',
                    message: error.body.message,
                    variant: 'error'
                });
                this.dispatchEvent(evt);
                console.error(error);
            });
    }

    showSuccessToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved successfully!',
            variant: 'success', // can be 'success', 'error', 'warning', 'info'
            mode: 'dismissable' // options: 'dismissable', 'pester', 'sticky'
        });
        this.dispatchEvent(event);
    }
}