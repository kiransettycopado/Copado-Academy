let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\n    \"isMessagesAvailable\": true,\n\"hasErrorMessage\": \"true\",\n    \"warningMessages\": {\n        \"messageId\": \"802Hn000007gaVtAAA|01tHn00000UiJgOAAE\",\n        \"bundleId\": \"802Hn000007gaVtAAA\",\n        \"code\": \"207\",\n        \"severity\": \"WARN\",\n        \"message\": \"ChildProduct1 Recommends ChildProduct2.\"\n    },\n    \"messageCount\": 2,\n    \"errorMessages\": {\n        \"messageId\": \"802Hn000007gaVtAAA|01tHn00000UiJgOAAE\",\n        \"bundleId\": \"802Hn000007gaVtAAA\",\n        \"code\": \"204\",\n        \"severity\": \"ERROR\",\n        \"message\": \"Required attribute missing for ChildProduct1.\",\n        \"actions\": {\n            \"DETAILS\": {\n                \"rest\": {\n                    \"params\": {},\n                    \"method\": \"GET\",\n                    \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Hn0000044djuAAY/items/802Hn000007gaVtAAA?cartId=801Hn0000044djuAAY&id=802Hn000007gaVtAAA\"\n                },\n                \"remote\": {\n                    \"params\": {\n                        \"methodName\": \"getCartsItemsById\",\n                        \"id\": \"802Hn000007gaVtAAA\",\n                        \"cartId\": \"801Hn0000044djuAAY\"\n                    }\n                },\n                \"client\": {\n                    \"params\": {}\n                }\n            }\n        }\n    },\n    \"records\": [\n        {\n            \"sites\": {\n                \"actions\": {\n                    \"newsite\": {\n                        \"client\": {\n                            \"params\": {}\n                        },\n                        \"remote\": {\n                            \"params\": {\n                                \"methodName\": \"newSite\",\n                                \"type\": \"Service\"\n                            }\n                        },\n                        \"rest\": {\n                            \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Hn0000044djuAAY/sites\",\n                            \"method\": \"POST\",\n                            \"params\": {}\n                        }\n                    }\n                },\n                \"messages\": [\n                    {\n                        \"message\": \"No Results Found.\",\n                        \"severity\": \"ERROR\",\n                        \"code\": \"101\"\n                    }\n                ],\n                \"totalSize\": 0\n            },\n            \"details\": {\n                \"records\": [\n                    {\n                        \"isCartActivated\": false,\n                        \"frameAgreementPresent\": false,\n                        \"contractDiscountsCount\": 0,\n                        \"accountDiscountsCount\": 0,\n                        \"isNotActiveContractDiscountPresent\": false,\n                        \"canCheckoutDiscounts\": false,\n                        \"cartAddedDiscounts\": 0,\n                        \"discountsForSubmission\": false,\n                        \"translatedLabels\": {\n                            \"vlocity_cmt__EffectiveOneTimeLoyaltyTotal__c\": \"Loyalty Total\",\n                            \"vlocity_cmt__DefaultCurrencyPaymentMode__c\": \"Default Currency Payment Mode\",\n                            \"vlocity_cmt__OneTimeLoyaltyTotal__c\": \"Total: One Time Loyalty\",\n                            \"vlocity_cmt__SupplementalAction__c\": \"Supplemental Action\",\n                            \"vlocity_cmt__OriginatingContractId__c\": \"Originating Contract\",\n                            \"vlocity_cmt__SupersededOrderId__c\": \"Superseded Order\",\n                            \"vlocity_cmt__IsChangesAllowed__c\": \"Changes Allowed\",\n                            \"vlocity_cmt__OrderStatus__c\": \"Order Status\",\n                            \"vlocity_cmt__PriceListId__c\": \"Price List\",\n                            \"vlocity_cmt__EffectiveOrderTotal__c\": \"Order Total\",\n                            \"vlocity_cmt__EffectiveOneTimeTotal__c\": \"One Time Total\",\n                            \"vlocity_cmt__EffectiveRecurringTotal__c\": \"Recurring Total\",\n                            \"vlocity_cmt__Phone__c\": \"Phone\",\n                            \"vlocity_cmt__Email__c\": \"Email\",\n                            \"ShippingAddress\": \"Shipping Address\",\n                            \"OrderNumber\": \"Order Number\",\n                            \"Status\": \"Status\",\n                            \"Name\": \"Order Name\",\n                            \"Id\": \"Order ID\"\n                        },\n                        \"ObjectType\": \"Order\",\n                        \"EffectiveOneTimeLoyaltyTotal__c\": 0,\n                        \"DefaultCurrencyPaymentMode__c\": \"Currency\",\n                        \"OneTimeLoyaltyTotal__c\": 0,\n                        \"SupersededOrderId__c\": \"\",\n                        \"IsChangesAllowed__c\": true,\n                        \"OrderStatus__c\": \"Ready To Submit\",\n                        \"orderStatusValue\": \"Ready To Submit\",\n                        \"PriceListId__r.LoyaltyCode__c\": \"PTS\",\n                        \"PriceListId__r.CurrencyCode__c\": \"USD\",\n                        \"PriceListId__r.Name\": \"CPQ\",\n                        \"PriceListId__c\": \"a3DHn000006Gd5tEAE\",\n                        \"EffectiveOrderTotal__c\": 7876,\n                        \"EffectiveOneTimeTotal__c\": 7876,\n                        \"EffectiveRecurringTotal__c\": 90,\n                        \"Account.Name\": \"CPQ\",\n                        \"Account.Id\": \"001Hn00001ykxhxAAH\",\n                        \"OrderNumber\": \"00000100\",\n                        \"Status\": \"Draft\",\n                        \"Name\": \"CPQ Test\",\n                        \"Id\": \"801Hn0000044djuAAY\",\n                        \"displaySequence\": -1\n                    }\n                ],\n                \"totalSize\": 1\n            },\n            \"displaySequence\": -1\n        }\n    ],\n    \"messages\": [\n        {\n            \"actions\": {\n                \"DETAILS\": {\n                    \"client\": {\n                        \"params\": {}\n                    },\n                    \"remote\": {\n                        \"params\": {\n                            \"cartId\": \"801Hn0000044djuAAY\",\n                            \"id\": \"802Hn000007gaVtAAA\",\n                            \"methodName\": \"getCartsItemsById\"\n                        }\n                    },\n                    \"rest\": {\n                        \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Hn0000044djuAAY/items/802Hn000007gaVtAAA?cartId=801Hn0000044djuAAY&id=802Hn000007gaVtAAA\",\n                        \"method\": \"GET\",\n                        \"params\": {}\n                    }\n                }\n            },\n            \"message\": \"Required attribute missing for ChildProduct1.\",\n            \"severity\": \"ERROR\",\n            \"code\": \"204\",\n            \"bundleId\": \"802Hn000007gaVtAAA\",\n            \"messageId\": \"802Hn000007gaVtAAA|01tHn00000UiJgOAAE\"\n        },\n        {\n            \"message\": \"ChildProduct1 Recommends ChildProduct2.\",\n            \"severity\": \"WARN\",\n            \"code\": \"207\",\n            \"bundleId\": \"802Hn000007gaVtAAA\",\n            \"messageId\": \"802Hn000007gaVtAAA|01tHn00000UiJgOAAE\"\n        }\n    ],\n    \"totalSize\": 1\n}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartErrorPanel_3_Vlocity","Id":"0RbHn000001EjaFCAK","ManageableState":"unmanaged","MasterLabel":"cfCpqCartErrorPanel_3_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[],"states":[{"actions":[],"childCards":["cpqCartErrorDetails"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-0","key":"element_element_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"color":"","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:info_alt","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__error-panel-warning_icon ","container":{"class":"cpq__error-panel-warning_icon"},"elementStyleProperties":{"color":""},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__error-panel-warning_icon ","container":{"class":"cpq__error-panel-warning_icon"},"elementStyleProperties":{"color":""},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Action-3","key":"element_element_block_0_0_action_1_0","name":"Action","parentElementKey":"element_block_0_0","property":{"card":"{card}","hideActionIcon":true,"iconOnly":false,"record":"{record}","stateAction":{"cardName":"cpqCartErrorDetails","cardNode":"{record.panelMessages}","displayName":"{alertInCartMessage}","flyoutLwc":"cpqCartErrorDetails","flyoutType":"childCard","id":"flex-action-1628665951201","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-details_btn ","container":{"class":"cpq__cart-error-details_btn"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_3-of-12 slds-small-size_4-of-12 slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n        color:#FFFFFF; ","text":{"align":"","color":"#FFFFFF"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-details_btn ","container":{"class":"cpq__cart-error-details_btn"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_3-of-12 slds-small-size_4-of-12 slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n        color:#FFFFFF; ","text":{"align":"","color":"#FFFFFF"}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-messages_block cpq__cart-message_panel-warning slds-card","container":{"class":"cpq__cart-messages_block cpq__cart-message_panel-warning"},"customClass":"slds-card","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-messages_block cpq__cart-message_panel-warning slds-card","container":{"class":"cpq__cart-messages_block cpq__cart-message_panel-warning"},"customClass":"slds-card","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"isMessagesAvailable","id":"state-new-condition-4","operator":"==","type":"custom","value":"true"},{"field":"hasErrorMessage","hasMergeField":false,"id":"state-new-condition-109","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"WarningMessage","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqCartErrorDetails"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-0-clone-0","key":"element_element_block_0_1_flexIcon_0_1","name":"Icon","parentElementKey":"element_block_0_1","property":{"color":"#000000","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:warning","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"default"},"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__error-panel-warning_icon ","container":{"class":"cpq__error-panel-warning_icon"},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__error-panel-warning_icon ","container":{"class":"cpq__error-panel-warning_icon"},"elementStyleProperties":{"color":"#000000"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Action-3","key":"element_element_block_0_1_action_1_1","name":"Action","parentElementKey":"element_block_0_1","property":{"card":"{card}","hideActionIcon":true,"iconOnly":false,"record":"{record}","stateAction":{"cardName":"cpqCartErrorDetails","cardNode":"{record.panelMessages}","displayName":"{alertInCartMessage}","flyoutLwc":"cpqCartErrorDetails","flyoutType":"childCard","id":"flex-action-1628665977849","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":"#000000"}}},"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-details_btn ","container":{"class":"cpq__cart-error-details_btn"},"elementStyleProperties":{"styles":{"label":{"color":"#000000"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_3-of-12 slds-small-size_4-of-12 slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n        color:#000000; ","text":{"align":"","color":"#000000"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-error-details_btn ","container":{"class":"cpq__cart-error-details_btn"},"elementStyleProperties":{"styles":{"label":{"color":"#000000"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_3-of-12 slds-small-size_4-of-12 slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n        color:#000000; ","text":{"align":"","color":"#000000"}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-messages_block cpq__cart-message_panel-error slds-card","container":{"class":"cpq__cart-messages_block cpq__cart-message_panel-error"},"customClass":"slds-card","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-messages_block cpq__cart-message_panel-error slds-card","container":{"class":"cpq__cart-messages_block cpq__cart-message_panel-error"},"customClass":"slds-card","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"isMessagesAvailable","hasMergeField":false,"id":"state-new-condition-4","operator":"==","type":"custom","value":"true"},{"field":"hasErrorMessage","hasMergeField":false,"id":"state-new-condition-99","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"ErrorMessageState","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartErrorPanel","Id":"a3gHn0000019GQEQAC","vlocity_cmt__GlobalKey__c":"cpqCartErrorPanel/Vlocity/3/1624278443722"};
  export default definition