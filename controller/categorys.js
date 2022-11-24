var categorysTable = document.getElementById("categorys-table");
var categorysResponse = [ ];
var deleteRequest;
var editRequest;

var categoryRequest = new XMLHttpRequest();
categoryRequest.open("GET", "API/V1/Categorys");
categoryRequest.onreadystatechange = onCategoryResponsed;
categoryRequest.send();

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
    deleteButton.setAttribute("delete-product-id", categorysResponse[i].category_id);
    deleteButton.addEventListener("click", onDeleteButtonPressed);
    deleteAndEditCell.appendChild(deleteButton);
  
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit-and-delete-button"
    editButton.setAttribute("edit-product-id", categorysResponse[i].category_id);
    editButton.addEventListener("click", onEditButtonPressed);
    deleteAndEditCell.appendChild(editButton);
  }
}

function onDeleteButtonPressed(event) {
  deleteRequest = new XMLHttpRequest();
  deleteRequest.open("Delete", "API/V1/Category/" + event.currentTarget.getAttribute("delete-category-id"));
  deleteRequest.onreadystatechange = onCategoryDeleteResponsed;
  deleteRequest.send();
}

function onCategoryDeleteResponsed() {
  if (deleteRequest.readyState < 4) {
    return;
  }
  alert("Deleted");
}

function onEditButtonPressed(event) {
  editRequest = new XMLHttpRequest();
  editRequest.open("PUT", "API/V1/Category/" + event.currentTarget.getAttribute("edit-category-id"));
  editRequest.onreadystatechange = onEditResponsed;
  editRequest.send(JSON.stringify(categoryDate));  
}

function onEditResponsed(event) {
  if (editRequest.readyState < 4) {
    return;
  }
  alert("Updated");
}
