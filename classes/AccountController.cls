public class AccountController {

    public List<Account> accounts { get; set; }

    public AccountController() {
        // Constructor to initialize the list of accounts
        // 10-Jan-2025
        // 20:50
        accounts = [SELECT Id, Name, Type, Industry FROM Account LIMIT 10];
    }

}