class GameLauncher{
  public static void main(String[] args){
    GuessGame game = new GuessGame();
    game.startGame();
  }
}

class Player{
  int number = 0;

  public void guess(){
    number = (int)(Math.random()*10);
    System.out.println("I'm guessing " + number);
  }
}

class GuessGame{

  Player p1;
  Player p2;
  Player p3;

  public void startGame(){

    p1 = new Player();
    p2 = new Player();
    p3 = new Player();
  
    int guessp1 = 0;
    int guessp2 = 0;
    int guessp3 = 0;
  
    boolean p1isRight = false;
    boolean p2isRight = false;
    boolean p3isRight = false;
  
    int targetNum = (int)(Math.random() * 10);
    System.out.println("I'm thinking of a number between 0 and 9...");

    while(true){
      System.out.println("Number to guess is " + targetNum);
      
      p1.guess();
      p2.guess();
      p3.guess();

      guessp1 = p1.number;
      System.out.println("Player one guessed " + guessp1);

      guessp2 = p2.number;
      System.out.println("Player two guessed " + guessp2);

      guessp3 = p3.number;
      System.out.println("Player three guessed " + guessp3);

      if( guessp1 == targetNum)
        p1isRight = true;

      if( guessp2 == targetNum)
        p1isRight = true;
      
      if( guessp3 == targetNum)
        p1isRight = true;

      if( p1isRight || p2isRight || p3isRight){
        System.out.println("we have a winner!");
        break;
      }else{
        System.out.println("try again!");
      }
    }

  }
}
