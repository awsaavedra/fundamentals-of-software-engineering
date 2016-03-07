class Hobbits{
  
  String name;

  public static void main( String [] args){

    Hobbits [] h = new Hobbits[2];
    
    int z = 0;
    while( z < 2){

      h[z] = new Hobbits();
      h[z].name = "bilbo";

      if( z == 0)
        h[z].name = "frodo";
      if( z == 1)
        h[z].name = "sam";

      System.out.print(h[z].name +" is a ");
      System.out.println("good Hobbit name");
    
      z = z + 1;
    }
  }
}
