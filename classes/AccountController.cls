public class AccountController {

    public List<Account> accounts { get; set; }

    public AccountController() {
        // Constructor to initialize the list of accounts
        accounts = [SELECT Id, Name, Type, Industry FROM Account LIMIT 10];
    }

}