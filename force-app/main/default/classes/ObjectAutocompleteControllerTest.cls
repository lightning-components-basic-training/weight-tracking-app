
@isTest
private class ObjectAutocompleteControllerTest {

    @isTest
    static void testContactSearchFirstAndLastName () {
        Contact fullMatchContact = new Contact(FirstName='Last', LastName='Last');
        Contact lastNameMatchContact = new Contact(FirstName='Someone', LastName='Last');
        List<Contact> contactsToInsert = new List<Contact>{fullMatchContact, lastNameMatchContact};
        insert contactsToInsert;
        String searchCriteria = 'Las';
        String[] searchFields = new List<String>{'FirstName', 'LastName'};
        String sObjectType = 'Contact';
        String retrieveFields = 'Phone, LastName';
        Integer queryLimit = 20;

        List<SObject> results = ObjectAutocompleteController.searchResults(searchCriteria, sObjectType, searchFields, queryLimit, retrieveFields);

        System.assert(results.size() == contactsToInsert.size());
        System.assert(((Contact)results.get(0)).LastName == 'Last');

    }

    @isTest
    static void testBuildQuery() {
        String searchCriteria = 'criteria';
        String[] searchFields = new List<String>{'FirstName', 'LastName'};
        String sObjectType = 'Contact';
        String retrieveFields = 'Phone, LastName';
        Integer queryLimit = 20;
        String queryString = ObjectAutocompleteController.buildQuery(
            searchCriteria, 
            sObjectType,
            searchFields,
            queryLimit,
            retrieveFields
        );
        System.assert(queryString.contains(sObjectType));
        System.assert(queryString.contains('LIMIT ' + queryLimit));
        System.assert(queryString.contains('OR'));
        System.assert(queryString.contains(retrieveFields));

    }

    @isTest
    static void testBuildConditionWithTwoFields () {
        String searchCriteria = 'criteria';
        String[] searchFields = new List<String>{'FirstName', 'LastName'};

        String result = ObjectAutocompleteController.buildCondition(searchCriteria, searchFields);

        System.assert(result.contains('OR'));
        System.assert(result.contains(searchCriteria));
        System.assert(result.contains('FirstName'));
        System.assert(result.contains('LastName'));
    }

    @isTest
    static void testBuildConditionWithOneField () {
        String searchCriteria = 'criteria';
        String[] searchFields = new List<String>{'LastName'};

        String result = ObjectAutocompleteController.buildCondition(searchCriteria, searchFields);

        System.assert(!result.contains('OR'));
        System.assert(result.contains(searchCriteria));
        System.assert(result.contains('LastName'));
    }
}
