<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>LearnC# - Output</title>
    <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    <nav>
      <ul id="navigation">
        <li><a href="../index.php">LearnC#</a></li>
        <li><a href="structure.php">Basic Structure</a></li>
        <li><a href="variables.php">Variable types</a></li>
        <li class="dropdown active">
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
        <li><a href="forum.php">Forum</a></li>
        <li><a href="login.php">Login</a></li>
      </ul>
    </nav>
    <article>
      <h2 class="title">3. Basic output</h2>
      <section>
        <p class="overview">If you want to print something on the terminal, for example "Hello World!", you use the commmand
          "<strong class="command">System.Console.WriteLine("Hello World!")</strong>".
          Everything that is written between those brackets will be printed.
          You implement it like that: </p>
<pre class="code">
namespace Introduction
{
    class program
    {
            static void Main()
            {
                    System.Console.WriteLine("Hello World!");
            }
      }
}</pre>
        <p>It´s important that you end a command with this symbol ";". So the program knows that the command is here finished.</p>
      </section>
    </article>
  </body>
</html>
