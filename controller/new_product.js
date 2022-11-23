var id = null;
var skuField = document.getElementById("sku-field");
var activeField = document.getElementById("active-field");
var categoryIdField = document.getElementById("category-field");
var nameField = document.getElementById("name-field");
var imageField = document.getElementById("image-field");
var descriptionField = document.getElementById("description-field");
var priceField = document.getElementById("price-field");
var stockField = document.getElementById("stock-field");
var newProductRequest;

function onNewProductButtonPressed(event) {
    event.preventDefault();

    var productData = {
        sku: skuField.value,
        active: activeField.value,
        category_id: categoryIdField.value,
        name: nameField.value,
        image: imageField.value,
        description: descriptionField.value,
        price: priceField.value,
        stock: stockField.value
    };
    
    newProductRequest = new XMLHttpRequest();
    newProductRequest.open("POST", "API/V1/Product");
    newProductRequest.onreadystatechange = onNewProductCreated;
    newProductRequest.send(JSON.stringify(productData));   
}

function onNewProductCreated(event) {
    if (newProductRequest.readyState < 4) {
        return;
    }
    alert("The Product was secuessfuly created");
}
var finishButton = document.createElement("button");
finishButton.addEventListener("click", onNewProductButtonPressed);