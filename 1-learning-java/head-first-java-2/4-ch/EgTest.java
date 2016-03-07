class ElectricGuitar{
  
  String brand;
  int numOfPickups;
  boolean rockStarUsesIt;

  String getBrand(){
    return brand;
  }

  int getNumOfPickups(){
    return numOfPickups;
  }


  void setBrand(String aBrand){
    brand = aBrand;
  }

  void setNumOfPickups(int pickups){
    numOfPickups = pickups;
  }
}

class EgTest{
  public static void main(String [] args){
    ElectricGuitar eg = new ElectricGuitar();

    eg.setBrand("yamaha");
    System.out.println(eg.getBrand());

    eg.setNumOfPickups(4);
    System.out.println(eg.getNumOfPickups());
  }
}
