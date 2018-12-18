(function(w){
  function validateInput(validationTypes, input){
    var validations = validationTypes.split(',');
    var validationsToPerform = [];

    for(var i = 0; i < validations.length; i++){
      var validation = validations[i].trim();
      if(validation){
        switch(validation){
          case 'weburl' : validationsToPerform.push(re_weburl); break;
          case 'positiveDecimalNumberWithTwoDecimals' : validationsToPerform.push(re_positiveDecimalNumberWithTwoDecimals); break;
          case 'positiveInteger' : validationsToPerform.push(re_positiveInteger); break;
          case 'nonEmptyString' : validationsToPerform.push(re_nonEmptyString); break;
          case 'emailAddress' : validationsToPerform.push(re_emailAddress); break;
          case 'ipAddress' : validationsToPerform.push(re_ipAddress); break;
          default: throw "Validation " + validations[i] + " not implemented";
        }
      }
    }

    for(var j = 0; j < validationsToPerform.length; j++)
    {
      if(!(validationsToPerform[j].test(input))){
        return false;
      }
    }

    return true;
  }

  //this is returned
  w.regexUtil = {
    "validateInput": validateInput
  };

  // ************* REGEX START *****************//
  //validate URL format
  var re_weburl = new RegExp(
      "^" +
      // protocol identifier
      "(?:(?:https?|ftp)://)" +
      // user:pass authentication
      "(?:\\S+(?::\\S*)?@)?" +
      "(?:" +
      // IP address exclusion
      // private & local networks
      "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
      "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
      "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
      "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
      "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
      "|" +
      // host name
      "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
      // domain name
      "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
      // TLD identifier
      "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
      // TLD may end with dot
      "\\.?" +
      ")" +
      // port number
      "(?::\\d{2,5})?" +
      // resource path
      "(?:[/?#]\\S*)?" +
      "$", "i"
  );

  //Validate Positive Decimal Number with Two Decimals
  var re_positiveDecimalNumberWithTwoDecimals = new RegExp("^\\d+(?:\\.\\d\\d?)?$");

  //Validate Positive Integer Number
  var re_positiveInteger = new RegExp("^[1-9]\\d*$");

  //Validate Non-empty string
  var re_nonEmptyString = new RegExp("^(?!\\s*$).+");

  //Validate email address
  var re_emailAddress = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //validate IPv4 address
  var re_ipAddress = /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/i;

  // ************* REGEX END *****************//


})(window);
