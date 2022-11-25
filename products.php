<link rel="stylesheet" href="view/stylesheet/style.css">
<nav>
    <a href="index.html">Home</a>
    <a class="active" href="products.php">Product</a>
    <a href="categorys.php">Category</a>
    <a class="sign-in" href="login.php">Login</a>
</nav>

<h1>Products</h1>

<!--Here is the table created for the list of the products.-->
<table class="products-categorys-table" id="products-table">
    <tr class="products-row">
        <th class="products-categorys-header">Sku</th>
        <th class="products-categorys-header">Active</th>
        <th class="products-categorys-header">Category_id</th>
        <th class="products-categorys-header">Name</th>
        <th class="products-categorys-header">Image</th>
        <th class="products-categorys-header">Description</th>
        <th class="products-categorys-header">Price</th>
        <th class="products-categorys-header">Stock</th>
        <th class="products-categorys-header">Delete/Edit</th>
    </tr>
</table>
<br>
<br>

<!--Here is the Button created and definted-->
<a href="new_product.php"><button class="create-new" id="new-product">Create a new Product</button></a>

<!--Here will the php connected with the JavaScript-->
<script src="controller/products.js"></script>