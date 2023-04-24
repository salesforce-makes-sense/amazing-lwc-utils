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

    handleInputChange(event) {
        this.dateTimeInput = event.detail.value;
    }

    handleClick(){
        console.log(this.selectedTZ);
        console.log(this.dateTimeInput);

        // sendLocaleTime({ searchKey: this.searchKey })
        //     .then((result) => {
        //         this.contacts = result;
        //         this.error = undefined;
        //     })
        //     .catch((error) => {
        //         this.error = error;
        //         this.contacts = undefined;
        //     });


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