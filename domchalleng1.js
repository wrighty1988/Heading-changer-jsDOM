const body = document.getElementsByTagName('body');
const textbox = document.getElementById("textbox");
const button = document.getElementById('toggle');
const header = document.getElementById("header")
body[0].style.backgroundColor = 'white';


button.onclick = () => {
    header.innerHTML = textbox.value;
}
    
  