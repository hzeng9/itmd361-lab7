function init(){
  var button = document.getElementById('entrybutton');

  function alertButton(){
    var text = document.getElementById('entryinput');
    document.getElementById('textoutput').innerText = text.value;
    alert("Hao Yuan Zeng: " + text.value);
  }

  button.addEventListener('click', alertButton);
}

window.addEventListener('load', init);
