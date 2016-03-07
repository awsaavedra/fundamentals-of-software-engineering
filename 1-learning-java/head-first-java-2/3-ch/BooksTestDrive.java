class Books{
  String title;
  String author;
}

class BooksTestDrive{
  public static void main(String [] args){


    Books [] myBooks = new Books[2];
    
    //loop to create book objects
    for( int i = 0; i < 2; i++){
      myBooks[i] = new Books();
    }

    myBooks[0].title = "Java";
    myBooks[0].author = "Timmah";
    myBooks[1].title = "C++";
    myBooks[1].author = "bjorn";
    
    int x = 0;
    while( x < 2 ){
      System.out.println(myBooks[x].title);
      System.out.print(" by ");
      System.out.println(myBooks[x].author);
      x = x + 1;
    }
  }
}
