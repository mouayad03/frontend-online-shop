<link rel="stylesheet" href="view/stylesheet/style.css">
<nav>
    <a href="index.html">Home</a>
    <a class="active" href="products.php">Product</a>
    <a href="categorys.php">Category</a>
    <a class="sign-in" href="login.php">Login</a>
</nav>

<h1>Products</h1>

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
    </tr>
</table>
<br>
<br>
<a href="new_product.php"><button class="create-new" id="new-product">Create a new Product</button></a>
<script src="controller/products.js"></script>