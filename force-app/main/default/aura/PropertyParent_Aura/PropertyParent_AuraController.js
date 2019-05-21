({
    init : function(component, event, helper) {
        var action = component.get("c.getPropertyList");
        action.setCallback(this, function (response) {
            var page = response.getReturnValue();
            console.log('Page %d loaded in %fms', page);
            component.set("v.properties", page);
            component.set('v.columns', [
                { label: 'Name', fieldName: 'Name', type: 'text' },
                { label: 'City', fieldName: 'City__c', type: 'text' },
                { label: 'State', fieldName: 'State__c', type: 'text' },
                { label: 'Address', fieldName: 'Address__c', type: 'text'}
            ]);
    });
    var startTime = performance.now();
    $A.enqueueAction(action);
    }
})