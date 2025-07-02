const sendUrl: HTMLButtonElement = document.getElementById("urlBtn") as HTMLButtonElement;
const urlInput: HTMLInputElement = document.getElementById('userUrl') as HTMLInputElement;
const urlSHort: HTMLInputElement = document.getElementById('urlShort') as HTMLInputElement;
const urlCopy: HTMLSpanElement = document.getElementById('urlCopy') as HTMLSpanElement;
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

urlSHort.addEventListener('click', (event: Event) => {
  console.log((event.target as HTMLInputElement).value)
})
urlCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(urlSHort.value);
  urlCopy.style.backgroundColor = '#fff';
})
urlCopy.addEventListener('mouseleave', () => {
  urlCopy.style.backgroundColor = 'rgb(80, 80, 80)'
})
urlInput.addEventListener('blur', (event: Event) => {
(event.target as HTMLInputElement).selectionEnd = 0
})

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