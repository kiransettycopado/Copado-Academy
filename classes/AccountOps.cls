public with sharing class AccountOps {
    private AccountOps() {
        // ...
    }
    
    public static Account setDefaultDescription(Account acc) {
        // If statements must use braces
        if (acc.Description == null) {
            acc.Description = 'Please provide a description';
        } else {
            return acc;
        }
        
        // Avoid DML Statements inside loops
        update acc;
        
        return acc;
    }
}