/*
 *Here are new variables definted
 */
var categorysTable = document.getElementById("categorys-table");
var nameField = document.createElement("input");
var activeField = document.createElement("input");
var categorysResponse = [ ];
var deleteRequest;
var editRequest;

/**
 * Direct if I open the category Webseit will list all Categorys 
 */
var categoryRequest = new XMLHttpRequest();
categoryRequest.open("GET", "API/V1/Categorys");
categoryRequest.onreadystatechange = onCategoryResponsed;
categoryRequest.send();

/**
 * Here is a for-loop definted to list all Categorys.
 * Here is the ID definted too, for the delete and edit
 * Here are all td created.
 */
function onCategoryResponsed() {
  if (categoryRequest.readyState < 4) {
    return;
  }

  categorysResponse = JSON.parse(categoryRequest.responseText);
  
  for (var i = 0; i < categorysResponse.length; i++) {

    var categoryRow = document.createElement("tr");
    categorysTable.appendChild(categoryRow);
  
    var nameCell = document.createElement("td");
    nameCell.innerText = categorysResponse[i].name;
    categoryRow.appendChild(nameCell);

    var activeCell = document.createElement("td");
    activeCell.innerText = categorysResponse[i].active;
    categoryRow.appendChild(activeCell);

    var deleteAndEditCell = document.createElement("td");
    categoryRow.appendChild(deleteAndEditCell);
    deleteAndEditCell.className = "delete-and-edit-td";

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "edit-and-delete-button";
    deleteButton.setAttribute("delete-category-id", categorysResponse[i].category_id);
    deleteButton.addEventListener("click", onDeleteButtonPressed);
    deleteAndEditCell.appendChild(deleteButton);
  
    var editButton = document.createElement("button");
    
    editButton.innerText = "Edit";
    editButton.className = "edit-and-delete-button";
    editButton.setAttribute("edit-category-id", categorysResponse[i].category_id);
    editButton.addEventListener("click", onEditButtonPressed);
    deleteAndEditCell.appendChild(editButton);
  }
}

/**
 * Here is the delete request definted
 */
function onDeleteButtonPressed(event) {
  deleteRequest = new XMLHttpRequest();
  deleteRequest.open("Delete", "API/V1/Category/" + event.currentTarget.getAttribute("delete-category-id"));
  deleteRequest.onreadystatechange = onCategoryDeleteResponsed;
  deleteRequest.send();
}

/**
 * Here is the request responsed
 */
function onCategoryDeleteResponsed() {
  if (deleteRequest.readyState < 4) {
    return;
  }
  /**
   * The response Messages.
   */
  responseStatus = deleteRequest.status;

  onCategoryResponsed();
  if (responseStatus == 200) {
    alert("Deleted");
  }
  else {
    alert("Not found");
  }
}

/**
 * Here is the edit request definted
 */
function onEditButtonPressed(event) {
  window.open("edit_category.php#" + event.currentTarget.getAttribute("edit-category-id"), "_self"); 

}
