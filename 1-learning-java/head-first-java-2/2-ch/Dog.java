class Dog{
  //instance variables
  int size;
  String breed;
  String name;

  void bark(){
    System.out.println("Ruff! Ruff!");
  }
  public static void main(String[] args){

  }
}
class DogTest{
  public static void main(String [] args){
    Dog d = new Dog();
    d.size = 40; //set the size of the Dog
    d.bark(); //calls bark method
  }
}
