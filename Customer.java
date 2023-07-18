public class Customer {

    private int id;

    private String name;

    private String username;

    private String password;

    private int accountId;


    
Customer(int id, String name, String username, String password, int accountId){

    setId(id);
    setname(name);
    setusername(username);
    setpassword(password);
    setaccountid(accountId);
        
}




public void setId(int id){

    this.id = id;
}


public int getId(){

    return this.id;
}


public void setname(String name){

    this.name = name;
}

public String getname(){

    return this.name;
}


public void setusername(String username){

    this.username = username;
}

public String getusername(){

    return this.username;
}


public void setpassword(String password){

    this.password = password;
}

public String getpassword(){

    return this.password;
}


public void setaccountid(int accountId){

    this.accountId = accountId;
}

public int getaccountId(){

    return this.accountId;
}

}

