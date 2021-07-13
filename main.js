/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").innerText =
  'I used the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2Class = document.getElementsByClassName("node2");
for (let i = 0; i < node2Class.length; i++) {
  node2Class[i].innerText =
    'I used the getElementByClassName("node2") method to access this';
}
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Elements = document.getElementsByTagName("h3");
for (let i = 0; i < h3Elements.length; i++) {
  h3Elements[i].innerText =
    'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.getElementById("parent");
let paragraph = document.createElement("p");
let textNode = document.createTextNode(
  "This node was created using the createElement() method"
);
paragraph.appendChild(textNode);
parent.appendChild(paragraph);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
// BONUS: Add a link href to the <a>
let anchor = document.createElement("a");
anchor.innerText = "Visit me";
anchor.href = "https://truecoders.io";
anchor.target="_blank";
parent.insertBefore(anchor, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"
let parent2 = document.getElementById("exercise3");
let n1 = document.getElementById("N1");
let newParagraph = document.createElement("p");
newParagraph.id = "N2";
let newTextNode = document.createTextNode("New Child Node");
newParagraph.appendChild(newTextNode);
parent2.replaceChild(newParagraph, n1);

let n2 = document.getElementById("N2");
while (n2.hasChildNodes()) {
  n2.removeChild(n2.firstChild);
}
/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */
let container = document.getElementById("container");
let textOut = `Container:\nHeight : ${container.offsetHeight} px\nWidth : ${container.offsetWidth} px`;
let box = document.getElementById("box");
console.log(textOut);
textOut = `Box:\nHeight : ${box.offsetHeight} px\nWidth : ${box.offsetWidth} px`;
console.log(textOut);
// Position the box on the right of the container
box.style.left = `${container.offsetWidth - box.offsetWidth}px`;
// Set the timer
let timer = setInterval(move, 75);
let boxPosition = container.offsetWidth - box.offsetWidth;

// Boolean flags to indicate the direction the box is moving
// Per instructions we start moving right to left
let rightLeftMovement = true;
let topBottomMovement = false;
let leftRightMovement = false;
let bottomTopMovement = false;

// All offesets are based on the top and left
function move() {
  // We are moving right to left and the box position is 0 
  // we are aligned with the left side of the container
  // Change direction to top to bottom
  if (rightLeftMovement && boxPosition <= 0) {
    boxPosition = 0;
    rightLeftMovement = false;
    leftRightMovement = false;
    topBottomMovement = true;
  // We are moving top to bottom and the box position is the container height
  // minus the box height we have been incrementing from the top.
  // Now we want to move left to right we are at the bottom of the container
  // increment from the left starting at zero.
  } else if (topBottomMovement && boxPosition >= container.offsetHeight - box.offsetHeight) {
    boxPosition = 0;
    rightLeftMovement = false;
    leftRightMovement = true;
    topBottomMovement = false;
    bottomTopMovement = false;
    // We are moving left to right accross the bottom of the container and
    // have reached the container width - box width.
    // Now we want to move from bottom to top. Set the box position
    // to the container width - box width and increment from the top 
    // in a negative direction
  } else if (leftRightMovement && boxPosition >= container.offsetWidth - box.offsetWidth) {
    boxPosition = container.offsetWidth - box.offsetWidth;
    leftRightMovement = false;
    rightLeftMovement = false;
    topBottomMovement = false;
    bottomTopMovement = true;
  } else if (bottomTopMovement && boxPosition <= 0) {
    boxPosition = container.offsetWidth - box.offsetWidth;
    rightLeftMovement = true;
    leftRightMovement = false;
    topBottomMovement = false;
    bottomTopMovement = false;
  }
  if (rightLeftMovement) {
    boxPosition -= 1;
    box.style.left = `${boxPosition}px`;
  } else if (topBottomMovement) {
    boxPosition += 1;
    box.style.top = `${boxPosition}px`;
  } else if (leftRightMovement) {
    boxPosition += 1;
    box.style.left = `${boxPosition}px`;
  } else if (bottomTopMovement) {
    boxPosition -= 1;
    box.style.top = `${boxPosition}px`;
  }
}

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show() {
  let modalDiv = document.createElement("div");
  modalDiv.id="modal-container";
  let modalContent = document.createElement("p");
  modalContent.id="modal-content";
  let modalClose = document.createElement("span");
  modalClose.id="modal-close";
  let modalTextNode = document.createTextNode("Clicking the button triggers the onclidk event, which calls the JS function show()... which alerts the user");
  modalParagraph.appendChild(modalTextNode);
}
