let definition = 
                {"states":[{"fields":[{"name":"","label":"","displayLabel":"<<Custom Field>>","type":"string","fieldType":"custom","collapse":true,"editing":false},{"name":"['Current']['CityState']","label":"Hazardous Weather Alert for:","displayLabel":"['Current']['CityState']","type":"string","group":"Custom Properties","collapse":true,"editing":false},{"name":"['Current']['Condition']","label":"Condition","displayLabel":"['Current']['Condition']","type":"string","group":"Custom Properties","collapse":true,"editing":false},{"name":"['Current']['TempF']","label":"Temp °F","displayLabel":"['Current']['TempF']","type":"string","group":"Custom Properties","collapse":true,"editing":false}],"conditions":{"group":[{"field":"$scope.data.status","operator":"===","value":"'active'","type":"system"},{"field":"['Current']['Condition']","operator":"==","value":"Heavy Snow","type":"custom","logicalOperator":"&&"}]},"definedActions":{"actions":[{"id":"Weather Website","displayName":"Weather.com","type":"Custom","url":"/apex/","isCustomAction":true,"collapse":true,"hasExtraParams":false,"vlocityIcon":"action:share_link","openUrlIn":"New Tab / Window","targetType":"Web Page","Web Page":{"targetType":"Web Page","targetName":"https://weather.com"}}]},"name":"Alert","lwc":{"MasterLabel":"wideCard","DeveloperName":"wideCard","Id":"0RbHn000001EjUZSAC","name":"wideCard"},"isSmartAction":false,"smartAction":{},"flyout":{"lwc":{"MasterLabel":"sample-weather-forecast","DeveloperName":"cfSampleWeatherForecast","Id":"0RbHn000001EjQySAE","name":"cfSampleWeatherForecast"}},"flyoutAttributes":[{"name":"records","val":"['Forecast']"}],"filter":"$scope.data.status === 'active' && $scope.obj['Current']['Condition'] == 'Heavy Snow'","disableAddCondition":false,"collapse":false},{"fields":[{"name":"['Current']['CityState']","label":"","displayLabel":"['Current']['CityState']","type":"string","group":"Custom Properties","collapse":true,"editing":false},{"name":"['Current']['Condition']","label":"Condition","displayLabel":"['Current']['Condition']","type":"string","group":"Custom Properties","collapse":true,"editing":false},{"name":"['Current']['TempF']","label":"Temp °F","displayLabel":"['Current']['TempF']","type":"string","group":"Custom Properties","collapse":true,"editing":false}],"conditions":{"group":[{"field":"$scope.data.status","operator":"===","value":"'active'","type":"system"}]},"definedActions":{"actions":[]},"name":"Active","lwc":{"MasterLabel":"wideCard","DeveloperName":"wideCard","Id":"0RbHn000001EjUZSAC","name":"wideCard"},"isSmartAction":false,"smartAction":{},"flyout":{"lwc":{"MasterLabel":"sample-weather-forecast","DeveloperName":"cfSampleWeatherForecast","Id":"0RbHn000001EjQySAE","name":"cfSampleWeatherForecast"}},"flyoutAttributes":[{"name":"records","val":"['Forecast']"}],"collapse":true}],"filter":{},"dataSource":{"type":"IntegrationProcedures","value":{"ipMethod":"team_getWeatherForecast","optionsMap":{"vlcClass":"vlocity_cmt.IntegrationProcedureService"},"inputMap":{"Days":"5","AccountId":"{{params.id}}"}}},"title":"Weather","enableLwc":true,"sessionVars":[{"name":"img","val":"https://cdn.dribbble.com/users/915711/screenshots/5827243/weather_icon3.png"}],"GlobalKey__c":"sample Weather Alert/vlocityDev/1/1594264149741"}; 
            export default definition