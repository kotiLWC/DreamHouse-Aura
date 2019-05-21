public with sharing class PropertyController_Aura {
   @AuraEnabled(cacheable=true)
    public static Property__c[] getPropertyList() {
         return [SELECT Id,Name,address__c, city__c, state__c, description__c, price__c, baths__c, beds__c, thumbnail__c, location__latitude__s, location__longitude__s FROM property__c
                              ORDER BY price__c LIMIT 100];
    }
}