<link rel="stylesheet" href="view/stylesheet/style.css">
<body class="new-category-product">
<nav>
    <a href="index.html">Home</a>
    <a href="products.php">Product</a>
    <a href="categorys.php">Category</a>
    <a href="login.php">Logout</a>
</nav>
<h1>Create new Category</h1>
<!--Here is the table created for the inputfield.-->
<table class="new-category-product">
    <tr>
        <td class="new-category-product">
            <br>
            <label for="name-field">Name</label>
            <br>
            <input type="text" id="name-field">
            <br>
            <br>
            <label for="active-field">Active</label>
            <br>
            <input type="number" id="active-field">
            <br>
            <br>
        </td>
    </tr>
</table>
<br>
<!--Here is the button created for the create_category.-->
<a href="categorys.php"><button class="finish" id="finish-button">Finish</button></a>

<!--Here will the create_category php connected with the JavaScript.-->
<script src="controller/edit_category.js"></script>
    
</body>