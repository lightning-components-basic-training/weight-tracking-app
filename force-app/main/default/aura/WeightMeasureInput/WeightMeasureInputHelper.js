({
    saveMeasure : function(component) {
        // TODO: 
        // 1. get action from controller
        // 2. set params and callback
        // 3. enqueue action.
    },
    resetChanges: function(component) {
        component.set('v.record', { sObjectType: 'Weight_Measure__c'});
    }, 
    onSaveMeasureComplete: function(component, measure) {
        // TODO:
        // 1. emit save
        // 2. reset changes
    },
    emitSaveMeasure: function(component, measure) {
        
    }
})
