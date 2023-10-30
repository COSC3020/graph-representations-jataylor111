[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12576783&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## My Runtime Analysis

Since this is just running through and moving each value of the matrix to the list it should have a complexity of 
$\theta(V^2)$ since it only cares about the vertices and doesn't care about the edges what so ever.  it is $V^2$ because there are 2 loops that it must run through.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
