import _ from "lodash";
import "./style.css";
import testImage from "./test.png";

async function getComponent() {
  const { default: _ } = await import("lodash");
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
