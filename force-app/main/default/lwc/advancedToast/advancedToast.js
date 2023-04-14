import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from "lightning/platformShowToastEvent";
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class AdvancedToast extends LightningElement {

    @api recordId;
    notifMessage;

    notification() {
        const evt = new ShowToastEvent({
            title: 'Warning',
            message: this.notifMessage,
            variant: "warning"
        });
        this.dispatchEvent(evt);
    }

    @wire(getRecord, { recordId: '$recordId', fields: [RATING_FIELD] })
    wiredRecord({ error, data }) {
        if (data) {
            if(data.fields.Rating.value != 'Hot'){
                this.notifMessage = 'Rating has been changed. Please contact account team to ensure rating is maintained as Hot';
                this.notification();
            }
        }
    }
}

