#Notes on Chapter 1

  assignment operator "="
  equals operator "=="

  conditionals
    ALWAYS evaluate to true or false
    types of conditions:
      if
      else if
      else
      ternary expression" x ? y : z

  loops
    while (examples in code)
    for
    do while

  compiler-
    
    1.general idea: stops 99% of problems before that occur 

    2.strongly-typed language - can't allow variables to hold the data of 
    wrong type ( casting is a solution to "1" wanting to be 1, etc.)

    3. Most safety violations are stopped by the compiler, JVM takes care of the
    remaining ones (improves speed through this partially).

    4. runtime exceptions: errors JVM catches, but used to support dynamic binding
      dynamic binding - at runtime, Java program can have new objects that weren't
      even known to the original programmer.

    5. bottom line: compiler is supposed to stop things that could never succeed
    at runtime.

    6. Security:

      a) prevents access violations (private methods being invoked)

      b) general idea: compiler stops people from touching code they weren't supposed
      to see

