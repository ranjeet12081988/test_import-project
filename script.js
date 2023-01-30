let button = document.createElement("button");
button.innerHTML = "Click me";

button.addEventListener("click", function() {
  alert("Button was clicked!");
});

document.body.appendChild(button);



