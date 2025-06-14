let sendUrl = document.getElementById("urlBtn") as HTMLButtonElement;
let urlInput = document.getElementById("userUrl") as HTMLTextAreaElement;

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function shortUrl() {
 //validate its an url
  var urlText = urlInput.value as string;
  if(urlText){
    try {
      new URL(urlText)
      //continue
      Toastify({
        text: "generating your link...",
        gravity: "bottom",
        position:"center",
        className: "toastAlert",
        style: {
          borderRadius: "12px",
          background: "green"
        }
      }).showToast();

    } catch (error) {
      //catch the error
      Toastify({
        text: "not a valir URL",
        gravity: "bottom",
        position:"center",
        className: "toastAlert",
        style: {
          borderRadius: "12px",
          background: "red"
        }
      }).showToast();
    }
  }
}

urlInput.addEventListener('keyup', () => {
  if(urlInput.value === ""){
     sendUrl.disabled=true;
  }
  else{
    sendUrl.disabled=false;
  }
})
sendUrl.addEventListener('click', () => {
  shortUrl();
})