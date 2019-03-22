({
  onPrintData : function(cmp, event, helper) {
    const ipData = cmp.get("v.ipData");
    const emailData = cmp.get("v.emailData");
    
    console.log('ip data: ', ipData);
    console.log('email data: ', emailData);
  }
})
