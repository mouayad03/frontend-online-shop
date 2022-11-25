<link rel="stylesheet" href="view/stylesheet/style.css">

<body class="sign_in">
    <nav>
        <a href="index.html">Home</a>
        <a href="products.php">Product</a>
        <a href="categorys.php">Category</a>
        <a class="active" href="login.php">Login</a>
    </nav>
    <!--Here is a div for the Login-webseit-->
    <div class="login">
        <h1 class="sign-in">Sign-in</h1>
        <form id="login">
            <!--Here are the Inputfield created for the Username and Password.
                The Button is here definted too.-->
            <label><b>Username</b></label>
            <input class="username" type="text" id="username" placeholder="Username">
            <br>
            <br>
            <label><b>Password</b></label>
            <input class="password" type="password" id="password" placeholder="Password">
            <br>
            <br>
            <button class="sign-in" id="sign-in">sign in</button>
        </form>
    </div>
    <!--Here connected the php with JavaScript-->
    <script src="controller/authentication.js"></script>
</body>

