public class TimezoneUtil {
    
    @AuraEnabled(cacheable=true)
    public static Map<String,String> fetchTimeZoneCodes(){

        Datetime dt = System.now();
        String dtPST = dt.format('dd MMM YYYY HH:mm', 'PST');
        String dtEST = dt.format('dd MMM YYYY HH:mm', 'EST');
        String dtIST = dt.format('dd MMM YYYY HH:mm', 'IST');

        return new Map<String,String>{ 'PST' => dtPST, 'EST' => dtEST, 'IST' => dtIST};

    }
    @AuraEnabled(cacheable=true)
    public static String checkDifference(String timeZone, String timeInput){
        
        String[] timeSplit = timeInput.split(':');
        Datetime GMTDate = Datetime.newInstanceGmt(System.today().year(),System.today().month(),System.today().day(),Integer.valueOf(timeSplit[0]), Integer.valueOf(timeSplit[1]), 0);
        String strConvertedDate = GMTDate.format('MM/dd/yyyy HH:mm:ss','Asia/Dubai');
        return strConvertedDate;
    }
}