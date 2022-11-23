var id = null;
var nameField = document.getElementById("name-field");
var activeField = document.getElementById("active-field");
var newCategoryRequest;

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

function onCategoryCreated(event) {
    if (newCategoryRequest.readyState < 4) {
        return;
    }
    alert("The Category was secuessfuly created");
}
var finishButton = document.getElementById("finish-button");
finishButton.addEventListener("click", onCategorySubmited);