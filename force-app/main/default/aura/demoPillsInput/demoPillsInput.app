<aura:application extends="force:slds">

  <aura:attribute name="ipData" type="String" default="123.233.11.42;10.10.10.10;" />
  <aura:attribute name="emailData" type="String" />

  <div class="slds-p-around_large">
  
    <c:pillsInput 
      label="IP Addresses" 
      name="ipAddresses" 
      placeholderText="Input IP Addresses separated by space"
      validationTypes="ipAddress" 
      value="{!v.ipData}"
    />

    <br />

    <c:pillsInput 
      label="Emails" 
      name="emails" 
      placeholderText="Input Email Addresses separated by space"
      validationTypes="emailAddress" 
      value="{!v.emailData}"
      preventInvalidInput="true"
      helpText="Press ENTER to save input"
      stackPills="true"
      hidePillsBorder="true"
      errorMessage="Invalid email address"
    />

    <br />

    <lightning:button variant="brand" label="Print Data to Console" onclick="{! c.onPrintData }" />

    </div>
    
</aura:application>
