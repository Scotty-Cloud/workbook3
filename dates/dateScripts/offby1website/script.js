function init(){
    const displayButton = document.getElementById("displayButton");  
    displayButton.onclick = displayDate;
  }
  function displayDate(){
    console.log("display");
    const dateInput = document.getElementById("dateInput");
    messageParagraph.innerText = dateInput.value
  }

  window.onload = init;