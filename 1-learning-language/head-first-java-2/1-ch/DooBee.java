//goal: produce this output "DooBeeDooBeeDo
//
public class DooBee{
  public static void main(String[] args){
    int x = 1;
    while (x < 3){
      System.out.print("DooBee");
      x = x + 1; //x++ works too
    }
    if( x == 3){
      System.out.print("Do");
    }
  }
}
