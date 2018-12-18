({
  /**
   * Initialize component
   */
  init: function (cmp, helper) {
    if (cmp.get("v.isSriptLoaded") === true) {
      helper.parseFieldToPills(cmp, helper);
    }
  },

  /**
   * Append the provided list of strings as Pills
   * 
   * @param {string[]} values - list of strings that should be added as Pills
   */
  addNewPills: function (cmp, helper, values) {
    const pills = cmp.get('v.pills');

    for (let i = 0; i < values.length; i++) {
      const trimmedVal = values[i].trim();

      if (trimmedVal !== "") {
        pills.push({
          id: lexUtil.guidGenerator(),
          label: trimmedVal,
          isValid: helper.isInputValid(cmp, helper, trimmedVal)
        });
      }
    }

    cmp.set('v.pills', pills);
  },

  /**
   * Check if provided value is valid as per the specified Validation Types
   * 
   * @param {string} value - value to be validated
   */
  isInputValid: function (cmp, helper, value) {
    return regexUtil.validateInput(cmp.get('v.validationTypes'), value);
  },

  /**
   * Parses the pills into a string that is stored in the "value" property
   */
  parsePillsToField: function (cmp, helper) {
    const pills = cmp.get('v.pills');
    const delimiterInDatabase = cmp.get('v.delimiterInDatabase');
    let fieldStr = '';

    for (let i = 0; i < pills.length; i++) {
      // NOTE: A check could be added here to prevent storing invalid pills (e.g. - if(pills[i].isValid))
      fieldStr += pills[i].label + delimiterInDatabase;
    }

    try {
      cmp.set('v.value', fieldStr);
    } catch (e) {
      // ignore issue that occurs when trying to set unbinded value
    }
  },

  /**
   * Parses the string from "value" property into individual pills
   */
  parseFieldToPills: function (cmp, helper) {
    const fieldStr = cmp.get('v.value');
    const delimiterInDatabase = cmp.get("v.delimiterInDatabase");
    const pills = [];

    if (fieldStr != null) {
      const splitFieldStr = fieldStr.split(delimiterInDatabase);

      for (let i = 0; i < splitFieldStr.length; i++) {
        if (splitFieldStr[i] !== "") {
          pills.push({
            id: lexUtil.guidGenerator(),
            label: splitFieldStr[i],
            isValid: helper.isInputValid(cmp, helper, splitFieldStr[i])
          });
        }
      }
    }

    cmp.set('v.pills', pills);
  }
})
