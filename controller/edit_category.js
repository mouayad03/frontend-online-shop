var nameField = document.getElementById("name-field");
var activeField = document.getElementById("active-field");
var editCategoryRequest;

function onEditButtonPressed(event) {
    event.preventDefault();

    var categoryDate = {
        name: nameField.value,
        active: activeField.value
    };
    
    editCategoryRequest = new XMLHttpRequest();
    editCategoryRequest.open("PUT", "API/V1/Category/" + window.location.hash.substring(1));
    editCategoryRequest.onreadystatechange = onEditResponsed;
    editCategoryRequest.send(JSON.stringify(categoryDate));   
}

function onEditResponsed(event) {
    if (editCategoryRequest.readyState < 4) {
        return;
    }
    
}
var finishButton = document.getElementById("finish-button");
finishButton.addEventListener("click", onEditButtonPressed);