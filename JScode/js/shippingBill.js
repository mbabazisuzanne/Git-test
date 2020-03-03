function billingFunction(){
  var checkbox = document.getElementById("same");
  var billingName = document.getElementById("billingName");
  var billingZip = document.getElementById("billingZip");
  
  var shippingName = document.getElementById("shippingName").value;
  var shippingZip = document.getElementById("shippingZip").value;
  
  if (checkbox.checked)
    {
      if(shippingName && shippingZip){
        billingName.value = shippingName;
        billingZip.value = shippingZip;
      }
    }
  else{
    billingName.value = "";
    billingZip.value = "";
  }
}