# Aura Pills Input component

An Aura Lightning component that breaks down an input into a list of lightning:pill components.

![pillsInput component](/imgs/ip_address_input.PNG)

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

## Quick Documentation

Below are listed some (not all) of the available attributes that can be set on the component:

* `delimiter` - this is a character that is going to be used to split the inputted string into pills. This approach enables a user to copy/paste a long list of IP Addresses separated by space (or by any other specified delimiter value), which would then be separated into individual pills automatically.
* `delimiterInDatabase` - this is a character used to split the pills when they are stored in a text field in database storage (or any other storage). Consider this as a semi-colon separator used to split the multi-picklist values.
* `validationTypes` - here we can specify what type of pattern the input needs to be in. If the pattern isn't matched, the pills are shown in red. Available validation types are emailAddress, ipAddress, weburl, positiveDecimalNumberWithTwoDecimals, positiveInteger, and nonEmptyString. You can add more custom validation types in /staticresources/LEX_JS/regex.js file.
* `preventInvalidInput` - prevent adding a pill that is in invalid format (users will have to press ENTER key to submit a valid input).
* `stackPills` - pills are stacked, instead of inline.
* `hidePillsBorder` - hides the pills border.

##### Stacked pills without border

![stacked pills without border](/imgs/email_address_input.PNG)

##### Preventing invalid input

![preventing invalid input](/imgs/email_address_input_invalid.PNG)

## For more info

See inline documentation.
