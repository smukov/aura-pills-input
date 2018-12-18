({
  /**
   * Scripts loaded
   */
  onScriptsLoaded: function(cmp, event, helper) {
    cmp.set("v.isSriptLoaded", true);
    helper.init(cmp, helper);
  },

  /**
   * Component loaded
   */
  onInit: function(cmp, event, helper) {
    if (cmp.get("v.stackPills")) {
      $A.util.removeClass(cmp.find("ulPills"), "slds-listbox_inline");
    }
    if (cmp.get("v.hidePillsBorder")) {
      $A.util.addClass(cmp.find("ulPills"), "hide-pills-border");
    }

    helper.init(cmp, helper);
  },

  /**
   * Reset the state of the component
   */
  onReset: function(cmp, event, helper) {
    cmp.set("v.pills", []);
    cmp.set("v.isValueLoaded", false);
    cmp.find("inputText").getElement().value = "";
    cmp.set("v.isInputValid", true);
  },

  /**
   * User provided input
   */
  onKeyUpInput: function(cmp, event, helper) {
    const delimiter = cmp.get("v.delimiter");
    const inputText = cmp.find("inputText").getElement();
    const currentInput = inputText.value;
    let acceptInput = true;

    // if ENTER is pressed, or a delimiter is added, split the current input into pills
    if (
      currentInput[currentInput.length - 1] === delimiter ||
      event.keyCode === 13
    ) {
      let values = currentInput.split(delimiter);

      if (cmp.get("v.preventInvalidInput") === true) {
        for (let i = 0; i < values.length; i++) {
          if (helper.isInputValid(cmp, helper, values[i].trim()) === false) {
            acceptInput = false;
            break;
          }
        }
      }

      if (acceptInput === true) {
        helper.addNewPills(cmp, helper, values);
        inputText.value = "";
      }
    }

    cmp.set("v.isInputValid", acceptInput);
  },

  /**
   * Number of pills has changed
   */
  onPillsChanged: function(cmp, event, helper) {
    helper.parsePillsToField(cmp, helper);
  },

  /**
   * When "value" property changes, parse it and create pills. 
   * This is executed only the first time the "value" property is changed (i.e. - when it is set). 
   */
  onValueChanged: function(cmp, event, helper) {
    if (
      cmp.get("v.isValueLoaded") === false &&
      cmp.get("v.isSriptLoaded") === true &&
      cmp.get("v.value") != null
    ) {
      cmp.set("v.isValueLoaded", true);
      helper.parseFieldToPills(cmp, helper);
    }
  },

  /**
   * Current input validity has changed - show/hide error message
   */
  onIsInputValidChange: function(cmp, event, helper) {
    const divErrorMessage = cmp.find("divErrorMessage");
    const divContainer = cmp.find("divContainer");

    if (cmp.get("v.isInputValid")) {
      $A.util.removeClass(divContainer, "slds-has-error");
      $A.util.addClass(divErrorMessage, "slds-hide");
    } else {
      $A.util.addClass(divContainer, "slds-has-error");
      $A.util.removeClass(divErrorMessage, "slds-hide");
    }
  },

  /**
   * User clicked on a pill
   */
  onClickPill: function(cmp, event, helper) {
    //NOTE: can be implemented at one point
  },

  /**
   * User clicked to remove a pill
   */
  onRemovePill: function(cmp, event, helper) {
    const pillId = event.getSource().get("v.name");
    const pills = cmp.get("v.pills");

    for (let i = 0; i < pills.length; i++) {
      if (pillId === pills[i].id) {
        pills.splice(i, 1);
        break;
      }
    }

    cmp.set("v.pills", pills);
  }
});
