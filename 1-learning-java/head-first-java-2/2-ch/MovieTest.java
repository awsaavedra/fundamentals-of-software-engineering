class Movie{
  String title;
  String genre;
  int rating;

  void playIt(){
    System.out.println("Playing the movie");
  }
}

public class MovieTest{
  public static void main(String[] args){
    Movie one = new Movie();
    one.title = "Gone with the wild";
    one.genre = "tragedy";
    one.rating = 2;
    System.out.println("title: " + one.title + " genre: " + one.genre + " rating: " + one.rating);
  }
}
