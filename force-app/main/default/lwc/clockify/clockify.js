import { LightningElement, wire, track } from 'lwc';
import getTimezoneCodes from '@salesforce/apex/TimezoneUtil.fetchTimeZoneCodes';
import checkDifference from '@salesforce/apex/TimezoneUtil.checkDifference';
import calculateTime from '@salesforce/apex/TimezoneUtil.calculateOutTime';

export default class Clockify extends LightningElement {

    @track finalMap = [];
    selectedTZ = 'PST';
    dateTimeInput;
    timeInput;
    workHours;

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

    handleTimeInputChange(event) {
        this.timeInput = event.detail.value;
    }

    handleWorkHoursChange(event) {
        this.workHours = event.detail.value;
    }

    handleClick(){
        checkDifference({ timeZone: this.selectedTZ, timeInput : this.dateTimeInput })
            .then((result) => {
                alert(result);
            })
            .catch((error) => {
                alert('Error');
            });
    }

    handleTimeOut(){
        calculateTime({ inTime: this.timeInput, workInHours : this.workHours })
        .then((result) => {
            alert(result);
        })
        .catch((error) => {
            alert('Error' + error);
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