public with sharing class ObjectAutocompleteController {
    @AuraEnabled(cacheable=true)
    public static List<SObject> searchResults(String searchCriteria, String sObjectType, String[] searchFields, 
        Integer queryLimit, String retrieveFields){
        
        String query = buildQuery(searchCriteria, sObjectType, searchFields, queryLimit, retrieveFields);
        return Database.query(query);
    }

    @TestVisible
    private static String buildQuery(String searchCriteria, String sObjectType, String[] searchFields, 
        Integer queryLimit, String retrieveFields) {
            String soql = 'SELECT Name, Id, ' + String.escapeSingleQuotes(retrieveFields) +
                ' FROM ' + sObjectType +
                ' WHERE ' + buildCondition( searchCriteria, searchFields) + 
                ' LIMIT ' + queryLimit;
            return soql;
    }

    @TestVisible
    private static String buildCondition(String searchCriteria, String[] searchFields) {
        String criteria = '';
        if (searchFields == null || searchFields.size() == 0) {
            // default criteria
            criteria += ' Name LIKE  \'' + String.escapeSingleQuotes(searchCriteria) + '%\'';
        }
        Integer index = 0;
        while (index < searchFields.size()) {
            criteria += ' ' + searchFields.get(index) + ' LIKE \'' + String.escapeSingleQuotes(searchCriteria) + '%\'';
            index++;
            if (index < searchFields.size()) {
                criteria += ' OR ';
            }
        }
        return criteria;
    }
}
