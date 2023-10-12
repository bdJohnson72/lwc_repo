/**
 * Created by bjohnson on 10/10/23.
 */

public with sharing class ContactController {
   @AuraEnabled(Cacheable=true)
    public static List<Contact> fetchContacts(){
        return [SELECT FirstName, LastName, Email, Phone
        FROM Contact LIMIT 20];
    }

}