# How Objects Behave

  a. State affects behavior, and vice versa.

    i) Objects have a behavior that acts on its state: the idea is simply that
      the class has the same methods but the methods can behave differently
      depending on the values of the instance variables (state)
        
        e.g. different types of dogs have different barks
    
    ii) A class describes what an object KNOWS and DOES

    iii) A method uses parameters. A caller passes arguments.
      method and caller examples...

          void method(parameter1, parameter2){
            System.out.println("this method returns nothing");
          }
          [...]

          object obj = new Object();
          obj.method(argument1,argument2);

      REMEMBER: you MUST pass in the correct TYPE of ARGUMENT to a method and
        the method should RETURN the right type back

        e.g. 
          int method(para1, para2){
            int sum = 0;
            sum = para1 + para2;
            return sum;
          }
    iv) returning stuff
      
      a. if you want to return multiple things using a method you will need to
      stuff them into a data structure (e.g. array).
      TODO: ??? pass by value?

      b. You can use a method for what it DOES and not return anything if you 
      wish, it only requires that IF you return something it is of the type required
      in the return.

        - methods MUST have a declared return type (void, int, string, etc.)

        - methods MUST return the type they're declared to return, if they do return
          something

    v) Accessors (getters) and Mutators (setters):
      
        -typically used to GET and SET instance variables.

        -Getter's ONLY purpose is to return what it was supposed to get 
          (e.g. size, height, weight, name, etc.)
        
        -Setter's ONLY for changing an argument's value and use it to set the 
        value and use it to set the value of an instance variable (usually).

        SEE EgTest.java <-- Eg means electric guitar

## Encapsulation

  Don't expose your data like we have been doing, meaning the dot operator
  can touch it (theCat.height = 2).
    
    Someone could just go changing data around and messing with your instance 
    variables or whatever malicious crap!

    __SOLUTION__: build SETTER methods for all the instance variables, and find a
    a way to force other code to call the setters rather than accessing data 
    directly.

      __silly way of remembering__: "by forcing everybody to call a setter method,
      we can protect the cat from unacceptable size changes

  ###Encapsulation starter rule of thumb

    -mark your INSTANCE VARIABLES  private and provide public GETTERS.

    -point of GETTERS and SETTERS? You can change your mind latter w/o breaking
    anybody else's code!


