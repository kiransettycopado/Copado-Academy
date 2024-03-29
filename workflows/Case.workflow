<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Workflowalert</fullName>
        <description>Workflowalert</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/MarketingProductInquiryResponse</template>
    </alerts>
    <fieldUpdates>
        <fullName>ChangePriorityToHigh</fullName>
        <field>Priority</field>
        <literalValue>High</literalValue>
        <name>Changes the case priority to high.</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Priorityislow</fullName>
        <field>Priority</field>
        <literalValue>Low</literalValue>
        <name>Priorityislow</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Typeoncase</fullName>
        <actions>
            <name>Workflowalert</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>Priorityislow</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Case.Type</field>
            <operation>equals</operation>
            <value>Mechanical</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>