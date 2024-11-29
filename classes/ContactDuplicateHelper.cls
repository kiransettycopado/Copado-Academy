// ContactDuplicateHelper.cls
public class ContactDuplicateHelper {
    public static void checkForDuplicateContacts(List<Contact> contacts) {
        Set<String> contactEmails = new Set<String>();
        List<Contact> duplicateContacts = new List<Contact>();
///comments for testing
        // Collect the unique email addresses from the contacts being inserted or updated
        for (Contact contact : contacts) {
            if (contact.Email != null) {
                contactEmails.add(contact.Email.toLowerCase());
            }
        }

        // Query for existing contacts with the same email addresses
        for (Contact existingContact : [
            SELECT Id, Email
            FROM Contact
            WHERE Email IN :contactEmails
            AND Id NOT IN :contacts // Exclude contacts being inserted or updated
        ]) {
            duplicateContacts.add(existingContact);
        }

        // Add an error message to the duplicate contacts
        for (Contact duplicateContact : duplicateContacts) {
            String errorMessage = 'Duplicate contact with email: ' + duplicateContact.Email;
            for (Contact contact : contacts) {
                if (contact.Email != null && contact.Email.equalsIgnoreCase(duplicateContact.Email)) {
                    contact.addError(errorMessage);
                }
            }
        }
    }
}