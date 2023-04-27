import { LightningElement, wire, track } from 'lwc';
import getTimezoneCodes from '@salesforce/apex/TimezoneUtil.fetchTimeZoneCodes';
import checkDifference from '@salesforce/apex/TimezoneUtil.checkDifference';

export default class Clockify extends LightningElement {

    @track finalMap = [];
    selectedTZ = 'PST';
    dateTimeInput;

    get options() {
        return [
            { label: 'PST', value: 'PST' },
            { label: 'EST', value: 'EST' },
            { label: 'IST', value: 'IST' }
        ];
    }

    handleChange(event) {
        this.selectedTZ = event.detail.value;
    }

    handleInputChange(event) {
        this.dateTimeInput = event.detail.value;
    }

    handleClick(){
        console.log(this.selectedTZ);
        console.log(this.dateTimeInput);

        checkDifference({ timeZone: this.selectedTZ, timeInput : this.dateTimeInput })
            .then((result) => {
                alert(result);
            })
            .catch((error) => {
                alert('Error');
            });
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