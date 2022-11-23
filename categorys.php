<link rel="stylesheet" href="view/stylesheet/style.css">
<nav>
    <a href="index.html">Home</a>
    <a href="products.php">Product</a>
    <a class="active" href="categorys.php">Category</a>
    <a class="sign-in" href="login.php">Login</a>
</nav>
<h1>Categorys</h1>
<table class="products-categorys-table" id="categorys-table">
    <tr>
        <th class="products-categorys-header">Name</th>
        <th class="products-categorys-header">Active</th>
        <th class="products-categorys-header">Delete</th>
    </tr>
</table>
<br>
<br>
<a href="new_category.php"><button class="create-new" id="new-category">Create a new Category</button></a>
<script src="controller/categorys.js"></script>
