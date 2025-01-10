@isTest
private class AccountControllerTest {

    @isTest
    static void testAccountController() {
        // Create test data
        // 10-Jan-2025
        // 20:50
        List<Account> testAccounts = new List<Account>();
        for (Integer i = 0; i < 10; i++) {
            testAccounts.add(new Account(Name='Test Account ' + i, Type='Prospect', Industry='Technology'));
        }
        insert testAccounts;
         // comment1
        // comment2
        // Instantiate AccountController
        AccountController controller = new AccountController();

        // Validate that the accounts property is not null and has the expected size
        System.assertNotEquals(null, controller.accounts);
        System.assertEquals(10, controller.accounts.size());

        // Validate that the accounts loaded in the constructor are of the expected type
        for (Account acc : controller.accounts) {
            System.assertEquals('Prospect', acc.Type);
            System.assertEquals('Technology', acc.Industry);
        }
    }
}