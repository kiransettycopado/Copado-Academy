let definition = 
                {"GlobalKey__c":"Campaign Story LWC/Vlocity/2/1580725964438","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"Campaign"},"states":[{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Status","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Type","name":"['highlight']","type":"string"},{"collapse":true,"editing":false,"fieldType":"custom","label":"Responded","name":"['activityType']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == true","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0RbHn000001Eja8CAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyOngoingState","Id":"0RbHn000001Eja9CAY","MasterLabel":"storyOngoingState","name":"storyOngoingState"},"name":"Campaign Ongoing","sObjectType":null,"templateUrl":"story-card","isSmartAction":false,"smartAction":{}},{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Status","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Type","name":"['highlight']","type":"string"},{"collapse":true,"editing":false,"fieldType":"custom","label":"Responded","name":"['activityType']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0RbHn000001Eja8CAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0RbHn000001EjaACAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Campaign","sObjectType":null,"templateUrl":"story-card","isSmartAction":false,"smartAction":{}}],"title":"Campaigns"}; 
            export default definition