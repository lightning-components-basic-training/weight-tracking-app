({
    showOptions : function(component) {
        var optionsContainer = component.find('lookup');
        $A.util.addClass(optionsContainer, 'slds-is-open');
    },
    hideOptions: function(component) {
        var optionsContainer = component.find('lookup');
        $A.util.removeClass(optionsContainer, 'slds-is-open');
    },
    loadOptions: function(component, searchCriteria) {
        if (searchCriteria.length >= 4) {
            this.searchResults(component, searchCriteria);
        }
    },
    searchResults: function(component, searchCriteria) {
        // get basic attributes
        var searchFields = component.get('v.searchFields');
        var limit = component.get('v.limit');
        var retrieveFields = component.get('v.fields');
        var sObjectType = component.get('v.sObjectType');

        // link to the server-side action from the component
        var action = component.get('c.searchResults');

        // set all parameters for the action
        action.setParams({
            sObjectType,
            searchFields,
            limit,
            retrieveFields
        });
        let helper = this;
        //prepare a callback
        action.setCallback(this, (response) => {
            helper.onSearchResultsCompleted(component, response);
        });
        // enqueue for execution.
        $A.enqueueAction(action);
    },
    onSearchResultsCompleted: function(component, response) {
        console.log(JSON.stringify(response));
    }
})