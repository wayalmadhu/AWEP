function mouseOver() {
  
  var elementId = document.querySelector("div").children[0];

  elementId.style.background = "royalblue";
  elementId.style.color = "yellow";

  elementId.innerHTML = "Hello CDACians!";
}

function mouseOut() {
  
  let elementId = document.querySelector("div").children[0];

  elementId.style.background = "black";
  elementId.style.color = "white";

  elementId.innerHTML = "Hello! it's done with element selector.";
}