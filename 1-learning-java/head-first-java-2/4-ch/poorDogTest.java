//Encapsulation stuff

class Dog{
  
  private int size;
  private String name;

  public int getSize(){
    return size;
  }
  public String getName(){
    return name;  
  }

  public void setSize(int s){
    size = s;
  }
  public void setName(String n){
    name = n;
  }
}

public class poorDogTest{
  public static void main (String [] args){
    Dog d = new Dog();
    d.setSize(3);
    d.setName("fido");

    System.out.println("Dog size is: " + d.getSize() + "\nDog name is: "+ d.getName());
  }
}
