// Practice: These are a few of my favorite things
// Build two fieldsets and input fields that will allow you to enter the name of a favorite thing of yours, and a location where you might purchase it (Target, Amazon, Best Buy, etc...)

// Add a button beneath the fieldsets labeled "Save to Wishlist".

// When the button is clicked, display the data in the following format in the DOM.

const container = document.getElementById("container");
let sectionEl = document.createElement("section");
sectionEl.innerHTML = "";

function createFieldsetInput(fieldsetID) {
    let newFieldset = document.createElement("fieldset");
    let newInputField = document.createElement("input");
    newInputField.type = "text";
    newInputField.id = fieldsetID
    newFieldset.appendChild(newInputField);
    container.appendChild(newFieldset);
}

let newButton = document.createElement("button")
newButton.textContent = "Save to Wishlist";

createFieldsetInput("thing");
createFieldsetInput("location");

container.appendChild(newButton)
container.appendChild(sectionEl)

function writeToDom() {
    let thingInput = document.getElementById("thing").value;
    let locationInput = document.getElementById("location").value;
    sectionEl.innerHTML += `<h3>I can purchase ${thingInput} at ${locationInput}.</h3>` 
    return sectionEl; 
}

newButton.addEventListener("click", writeToDom)