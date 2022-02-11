import _ from "lodash";
import "./style.css";
import testImage from "./test.png";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  btn.innerHTML = "Clime andhek the console!";
  element.appendChild(btn);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  // const myImage = new Image();
  // myImage.src = testImage;
  // element.appendChild(myImage);

  return btn;
}

document.body.appendChild(component());
