//NOTE: I know you want it more modular and customizable but I am keeping 
//it simple
class Dog{
  int size;
  String name;

  void bark(){
      if( size > 60)
        System.out.println("Woof woof!");   
      else if( size > 14)
        System.out.println("Yip yip!");   
      else
        System.out.println("*fart noises*");
  }
}

class DogTestDrive{
  public static void main(String [] args){
    //created an array of dog weights
    int [] dogWeight = {70, 8, 35};
    //created an array of dog objects, with 3 elements
    Dog [] dogs = new Dog[3];

    
    for(int i = 0; i < 3; i++){
      dogs[i] = new Dog();      
    }
    for(int i = 0; i < 3; i++){
      dogs[i].size = dogWeight[i];
    }
    for(int i = 0; i < 3; i++){
      dogs[i].bark();
    }
  }
}
