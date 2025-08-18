const sendUrl: HTMLButtonElement = document.getElementById("urlBtn") as HTMLButtonElement;
const urlInput: HTMLInputElement = document.getElementById('userUrl') as HTMLInputElement;
const urlShort: HTMLInputElement = document.getElementById('urlShort') as HTMLInputElement;
const urlCopy: HTMLSpanElement = document.getElementById('urlCopy') as HTMLSpanElement;
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

async function shortUrl() {
  var urlText = urlInput.value as string;
  if(urlText){
    try {
      const requestUrl = await fetch('http://localhost:3000/short', {
       method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: urlText })
    })
    const data = await requestUrl.json();
    urlShort.value = data.shortUrl;
    Toastify({
      text: "generating your link...",
      gravity: "bottom",
      position: "center",
      className: "toastAlert",
      style: {
        borderRadius: "12px",
        background: "green"
      }
    }).showToast();
    }
    catch (error) {
      Toastify({
      text: "not a valid URL",
      gravity: "bottom",
      position: "center",
      className: "toastAlert",
      style: {
        borderRadius: "12px",
        background: "red"
      }
    }).showToast()
    } 
  }
}

urlShort.addEventListener('click', (event: Event) => {
  console.log((event.target as HTMLInputElement).value)
})
urlCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(urlShort.value);
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