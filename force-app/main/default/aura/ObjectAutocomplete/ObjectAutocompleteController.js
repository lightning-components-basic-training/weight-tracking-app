({
    showOptions : function(component, event, helper) {
        helper.showOptions(component);
    },
    hideOptions: function(component, event, helper) {
        helper.hideOptions(component);
    },
    loadOptions: function(component, event, helper) {
        // TODO: load items from the database, and then store them inside the items attr.
        // TODO: load items only if the minimum amount of characters has been entered.
        helper.loadOptions(component, event.target.value);
    }
})