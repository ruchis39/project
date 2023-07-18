public class Account {

    private int id;

    private String type;

    private double balance;

    Account(int id, String type, double balance){

       setId(id);

       setType(type);

       setBalance(balance);
    }

    public void setId(int id){

        this.id = id;
    }

    public int getId(){

        return this.id;
    }

    public void setType(String type){

        this.type = type;
    }

    public String getType(){

        return this.type;
    }

    public void setBalance(double balance){

        this.balance = balance;
    }

    public double getBalance(){

        return this.balance;
    }
    
}
