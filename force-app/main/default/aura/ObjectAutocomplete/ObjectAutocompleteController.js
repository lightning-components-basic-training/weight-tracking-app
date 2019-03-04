({
    showOptions : function(component, event, helper) {
        helper.showOptions(component);
    },
    hideOptions: function(component, event, helper) {
        helper.hideOptions(component);
    },
    selectItem: function(component, event, helper) {
        helper.selectItem(component, event.currentTarget.dataset.record);
    },
    processInput: function(component, event, helper) {
        helper.processInput(component, event);
    }
})