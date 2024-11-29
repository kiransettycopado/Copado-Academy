// ContactDuplicateTriggerTest.cls
@IsTest
public class ContactDuplicateTriggerTest {
    @IsTest
    static void testDuplicateContacts() {
        // Create a new contact
        Contact newContact = new Contact(
            FirstName = 'John',
            LastName = 'Doe',
            Email = 'johndoe@example.com'
        );

        // Insert the new contact
        insert newContact;

        // Create a duplicate contact with the same email
        Contact duplicateContact = new Contact(
            FirstName = 'Jane',
            LastName = 'Doe',
            Email = 'johndoe@example.com'
        );

        // Add the duplicate contact to a list
        List<Contact> contactsToInsert = new List<Contact>();
        contactsToInsert.add(duplicateContact);

        // Try to insert the duplicate contact
        try {
            insert contactsToInsert;
            // If the duplicate contact is inserted successfully, fail the test
            System.assert(false, 'Duplicate contact with the same email was inserted.');
        } catch (DmlException e) {
            // Verify that the error message is as expected
            System.assertEquals('Duplicate contact with email: johndoe@example.com', e.getDmlMessage(0));
        }
    }
}