class GoodDog{
  private int size;

  public int getSize(){
    return size;
  }

  public void setSize(int s){
    size = s;
  }

  void bark(){
    if( size > 60){
      System.out.println("woof!");
    }else{
      System.out.println("ruff!");
    }
  }
}

class DogTest{
  public static void main(String [] args){
    
    GoodDog[] dogs = new GoodDog[2];

    int [] weight = {70, 8 };
    
    for(int i = 0; i < 2; i++){
      dogs[i] = new GoodDog();
      dogs[i].setSize(weight[i]);
      System.out.println(dogs[i].getSize());
    }
  }
}
