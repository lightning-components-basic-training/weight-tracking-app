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
        var queryLimit = component.get('v.limit');
        var retrieveFields = component.get('v.fields');
        var sObjectType = component.get('v.sObjectType');

        // link to the server-side action from the component
        var action = component.get('c.searchResults');

        // set all parameters for the action
        action.setParams({
            searchCriteria,
            sObjectType,
            searchFields,
            queryLimit,
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
        component.set('v.items', response.getReturnValue());
    },
    selectItem: function(component, recordId) {
        var items = component.get('v.items');
        var selected = items.find(el => el.Id === recordId);
        this.emitSelect(component, selected);
    },
    emitSelect: function(component, element) {
        var evt = component.getEvent('ObjectAutocompleteSelect');

        evt.setParams({ selected: element });
        evt.fire();
    }
})