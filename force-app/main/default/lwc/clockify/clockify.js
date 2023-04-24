import { LightningElement, wire, track } from 'lwc';
import getTimezoneCodes from '@salesforce/apex/TimezoneUtil.fetchTimeZoneCodes';

export default class Clockify extends LightningElement {

    @track finalMap = [];
    selectedTZ = 'PST';
    dateTimeInput;

    get options() {
        return [
            { label: 'PST', value: 'PST' },
            { label: 'EST', value: 'EST' },
            { label: 'IST', value: 'IST' },
            { label: 'GST', value: 'GST' }
        ];
    }

    handleChange(event) {
        this.selectedTZ = event.detail.value;
    }

    @wire(getTimezoneCodes) timeData({ error, data }){
        if(data){
            var conts = data;
            for(var key in conts){
                this.finalMap.push({value:conts[key], key:key});
            }
        }
    }
}