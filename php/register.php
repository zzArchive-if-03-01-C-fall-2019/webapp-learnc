<?php
require 'header.php';
?>
  <link rel="stylesheet" type="text/css" href="../css/login_register.css">
  </head>
<body>
  <nav>
    <ul id="navigation">
      <li><a href="../index.php">LearnC#</a></li>
      <li><a href="structure.php">Basic Structure</a></li>
      <li><a href="variables.php">Variable types</a></li>
      <li class="dropdown">
        <a class="dropbtn" href="#OI">OI</a>
        <div class="dropdown-content">
          <a href="output.php">Output</a>
          <a href="input.php">Input from user</a>
        </div>
      </li>
      <li><a href="selections.php">Selections</a></li>
      <li><a href="arrays.php">Arrays</a></li>
      <li><a href="methods.php">Methods</a></li>
      <li><a href="structs.php">Structs</a></li>
      <li><a href="forum.php">Structs</a></li>
      <li class="active"><a href="login.php">Structs</a></li>
    </ul>
  </nav>
    <section class="loginregister">
      <?php
      if (isset($_GET['error']))
      {

        if($_GET['error'] == "invalidmailuid"){
          echo '<p class="signuperror">Invalid Username and E-Mail!</p>';
        }
        else if($_GET['error'] == "invaliduid"){
          echo '<p class="signuperror">Invalid Username</p>';
        }
        else if($_GET['error'] == "invalidmail"){
          echo '<p class="signuperror">Invalid E-Mail!</p>';
        }
        else if($_GET['error'] == "passwordcheck"){
          echo '<p class="signuperror">Your passwords do not match!</p>';
        }
        else if($_GET['error'] == "usertaken"){
          echo '<p class="signuperror">The Username is already taken!</p>';
        }
      }
      if (isset($_GET['register']))
      {
        if($_GET['register'] == "success"){
          echo '<p class="signupsuccess">Registering successful!</p>';
        }
      }
      ?>
      <form action="logic/register.logic.php" method="POST">
          <input name="uid"        type="text"     placeholder="username" required>
          <input name="mail"       type="text"     placeholder="e-mail" required>
          <input name="pwd"        type="password" placeholder="password" required>
          <input name="pwd-repeat" type="password" placeholder="confirm password" required>
          <button name="signup-submit" type="submit" >Register</button>
      </form>
      <a href="login.php">Have an Account? Login now!</a>

      </section>
    <?php
require 'footer.php';
?>
