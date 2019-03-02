({
    showOptions : function(component) {
        var optionsContainer = component.find('lookup');
        $A.util.addClass(optionsContainer, 'slds-is-open');
    },
    hideOptions: function(component) {
        var optionsContainer = component.find('lookup');
        $A.util.removeClass(optionsContainer, 'slds-is-open');
    }
})