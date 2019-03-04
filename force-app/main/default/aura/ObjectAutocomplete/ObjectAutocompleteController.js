({
    showOptions : function(component, event, helper) {
        helper.showOptions(component);
    },
    hideOptions: function(component, event, helper) {
        helper.hideOptions(component);
    },
    loadOptions: function(component, event, helper) {
        helper.loadOptions(component, event.target.value);
    },
    selectItem: function(component, event, helper) {
        helper.selectItem(component, event.currentTarget.dataset.record);
    }
})