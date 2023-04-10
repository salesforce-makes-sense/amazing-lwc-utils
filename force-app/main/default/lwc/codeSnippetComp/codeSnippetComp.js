import { LightningElement } from 'lwc';
import fetchPicklistCode from '@salesforce/apex/SchemaUtil.fetchPicklistValuesCode';

export default class CodeSnippetComp extends LightningElement {
    
    codeString;
    errorMsg;

    handleClick(event){
        var codeSnipFor = event.target.title;

        switch(codeSnipFor){
            case "picklistvalues": 
            fetchPicklistCode()
                .then(result =>{
                    this.codeString = result;
                })
                .catch(error =>{
                    this.errorMsg = error;
                })
            break;
            
            case "loggedinuser": ;
            break;
            
            case "loggedinprofile": ;
            break;
            
            case "selectoption": ;
            break;
            
            case "batchapex": ;
            break;
            
            case "recordtypeid": ;
            break;
            
            case "trigger": ;
            break;
        }
    }
}