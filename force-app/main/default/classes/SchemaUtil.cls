public with sharing class SchemaUtil {
    
    @AuraEnabled(cacheable=true)
    public static String fetchPicklistValuesCode(/*String objectApiName, String fieldApiName*/){

        String objectApiName = 'Account';
        String fieldApiName = 'Rating';

        String codeSnippet = 'List&lt;String&gt; pickListValuesList = new List&lt;String&gt;();<br>' 
        + 'Schema.DescribeFieldResult fieldResult = <b>' + objectApiName + '</b>.<b>' + fieldApiName + '</b>.getDescribe();<br>'
        + 'List&lt;Schema.PicklistEntry&gt; ple = fieldResult.getPicklistValues();<br>'
        + 'for(Schema.PicklistEntry pickListVal : ple){<br>'
        + '\tpickListValuesList.add(pickListVal.getLabel());<br>'
        + '}<br>'
        + 'return pickListValuesList;<br>';

        return codeSnippet;
    }
}