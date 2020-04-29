const hw = document.querySelector(".hw");
hw.innerHTML += "Hello World";

// OU //

function helloworld(text) {
  const element = document.createElement("div");
  const title = document.createTextNode(text);
  element.appendChild(title);
  hw.appendChild(element);
}

helloworld("Hello Wolrd2");
