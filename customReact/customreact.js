function mainContainer(reactElement, container) {
  /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    container.appendChild(domElement);'*/

  // Create a DOM element based on the reactElement type
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  // Loop through reactElement props and set attributes, ignoring 'children'
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append the created DOM element to the container
  container.appendChild(domElement);
}

// Define a sample reactElement
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Google",
};

// Get the container element
const rootContainer = document.getElementById("root");

// Call the mainContainer function with the sample reactElement and container
mainContainer(reactElement, rootContainer);
