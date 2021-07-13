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
parent.insertBefore(anchor, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"
let parent2 = document.getElementById("exercise3");
let n1 = document.getElementById("N1");
let newParagraph = document.createElement("p");
newParagraph.id="N2";
let newTextNode = document.createTextNode("New Child Node");
newParagraph.appendChild(newTextNode);
parent2.replaceChild(newParagraph, n1);

let n2 = document.getElementById("N2");
while(n2.hasChildNodes()) {
  n2.removeChild(n2.firstChild);
}
/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
