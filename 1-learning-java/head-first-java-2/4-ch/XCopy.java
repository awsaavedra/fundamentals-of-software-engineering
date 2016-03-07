class XCopy{
  public static void main(String [] args){

    int o = 42;

    XCopy x = new XCopy();

    int y = x.go(o);
    System.out.println( o + " " + y);
  }

  int go(int arg){
    arg = arg* 2;
    return arg;
  }
}
