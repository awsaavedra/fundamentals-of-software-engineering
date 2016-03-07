//you may be asking yourself: why write such simple code if you are
//refreshing??? Well I am debuggin the books "BE the compiler" sections
//which sometimes have numerous errors
//Mostly, it is to get that 10,000 hours of coding in

class Clock{
  String time;

  //setter aka mutator
  void setTime(String t){
    time = t;
  }

  //getter aka accessor
  String getTime(){
    return time;
  }
}


class ClockTest{

  public static void main(String [] args){
    Clock c = new Clock();

    c.setTime("12:30");
    
    System.out.println("time : " + c.getTime());
  }
}
