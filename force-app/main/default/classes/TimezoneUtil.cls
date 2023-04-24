public class TimezoneUtil {
    
    @AuraEnabled(cacheable=true)
    public static Map<String,String> fetchTimeZoneCodes(){

        Datetime dt = System.now();
        String dtPST = dt.format('dd MMM YYYY HH:mm', 'PST');
        String dtEST = dt.format('dd MMM YYYY HH:mm', 'EST');
        String dtIST = dt.format('dd MMM YYYY HH:mm', 'IST');
        String dtGST = dt.format('dd MMM YYYY HH:mm', 'GST');

        return new Map<String,String>{ 'PST' => dtPST, 'EST' => dtEST, 'IST' => dtIST, 'GST' => dtGST};

    }
}