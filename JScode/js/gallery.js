/*Name this external file gallery.js*/

var originaltext;
var originalbackground;


function upDate(previewPic) {


  originaltext = document.getElementById("image").innerHTML;
  originalbackground = document.getElementById("image").style.backgroundImage;

  var img_url = previewPic.src;
  document.getElementById("image").style.backgroundImage = "url(" + img_url + ")";

  var alt_text = previewPic.alt;
  document.getElementById("image").innerHTML = alt_text;

}

function unDo() {

  document.getElementById("image").style.backgroundImage = originalbackground;

  document.getElementById("image").innerHTML = originaltext;


}


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