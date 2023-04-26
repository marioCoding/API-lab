const changeBackgroundColor = () => {
  fetch("https://www.colr.org/json/color/random")
  .then(response => response.json()) 
  .then((json) => console.log(json))
  .then(data => {
    document.body.style.backgroundColor = data.new_color;
  }).catch(err => {
    console.error('error', err.message);
  });
}

// Change the background color when the button is clicked
document.getElementById("grabButton").addEventListener("click", changeBackgroundColor);
