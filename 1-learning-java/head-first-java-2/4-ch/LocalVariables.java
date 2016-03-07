/*
 * Local variables must be initialized before use!
 */


class LocalVariables{
  
  public static void main(String [] args){
    LocalVariables var = new LocalVariables();
  
    System.out.println("one plus 2: " + var.add(1,2));
    System.out.println("five minus 2 : " + var.subtract(5,2));
  }
    
  public int add(int a, int b){
    int sum = a + b;
    return sum;
  }
  
  public int subtract(int a, int b){
    int sum = a - b;
    return sum;
  }

}
