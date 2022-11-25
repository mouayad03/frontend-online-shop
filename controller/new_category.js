/*
 *Here are new variables definted
 */
var nameField = document.getElementById("name-field");
var activeField = document.getElementById("active-field");
var newCategoryRequest;

/**
 * Here is the request of POST category requested
 */
function onCategorySubmited(event) {
    event.preventDefault();

    var categoryDate = {
        name: nameField.value,
        active: activeField.value
    };
    
    newCategoryRequest = new XMLHttpRequest();
    newCategoryRequest.open("POST", "API/V1/Category");
    newCategoryRequest.onreadystatechange = onCategoryCreated;
    newCategoryRequest.send(JSON.stringify(categoryDate));   
}

/**
 * Here is the POST responsed
 */
function onCategoryCreated(event) {
    if (newCategoryRequest.readyState < 4) {
        return;
    }
    /**
     * The response Messages.
     */
     var responseStatus = newCategoryRequest.status;

     if (responseStatus == 200) {
       alert("Successfuly created.");
     }
     else {
       alert("Error: Please try again");
     }
}

/**
 * Here is the Button created and definted, when the button clicked, will the response responed
 */
var finishButton = document.getElementById("finish-button");
finishButton.addEventListener("click", onCategorySubmited);