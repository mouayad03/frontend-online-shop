/*
 *Here are new variables definted
 */
 var skuField = document.getElementById("sku-field");
 var activeField = document.getElementById("active-field");
 var categoryIdField = document.getElementById("category-field");
 var nameField = document.getElementById("name-field");
 var imageField = document.getElementById("image-field");
 var descriptionField = document.getElementById("description-field");
 var priceField = document.getElementById("price-field");
 var stockField = document.getElementById("stock-field");
 var editProductRequest;
 
 /**
  * Here is the request of POST category requested
  */
 function onEditButtonPressed(event) {
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
     
     editProductRequest = new XMLHttpRequest();
     editProductRequest.open("PUT", "API/V1/Product/" + window.location.hash.substring(1));
     editProductRequest.onreadystatechange = onEditResponsed;
     editProductRequest.send(JSON.stringify(productData));   
 }
 
 /**
  * Here is the POST responsed
  */
 function onEditResponsed(event) {
     if (editProductRequest.readyState < 4) {
         return;
     }
     /**
      * The response Messages.
      */
     var responseStatus = editProductRequest.status;
 
     if (responseStatus == 200) {
        alert("Successfuly updated.");
     }
     else {
        alert("Error: Please try again");
     }}
 
 /**
  * Here is the Button created and definted, when the button clicked, will the response responed
  */
 var finishButton = document.getElementById("product-button");
 finishButton.addEventListener("click", onEditButtonPressed);