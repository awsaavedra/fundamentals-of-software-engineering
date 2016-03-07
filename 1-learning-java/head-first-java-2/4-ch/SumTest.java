class Sum{
  

  int addTwoNum(int para1, int para2){
    int sum = para1 + para2;
    return sum;
  }
}

class SumTest{
  public static void main(String [] args){
    Sum one = new Sum();
    System.out.println(one.addTwoNum(1,2));
  }
}
