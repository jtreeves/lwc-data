import { LightningElement, wire } from 'lwc'
import { reduceErrors } from 'c/ldsUtils'
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import getContacts from '@salesforce/apex/ContactController.getContacts'

const COLUMNS = [
    { 
        label: 'First Name', 
        fieldName: FIRST_NAME_FIELD.fieldApiName, 
        type: 'text' 
    },
    { 
        label: 'Last Name', 
        fieldName: LAST_NAME_FIELD.fieldApiName, 
        type: 'currency' 
    },
    { 
        label: 'Email', 
        fieldName: EMAIL_FIELD.fieldApiName, 
        type: 'text' 
    }
]

class ContactList extends LightningElement {
    columns = COLUMNS
    @wire(getContacts)
    contacts

    get errors() {
        return (this.accounts.error) ? reduceErrors(this.accounts.error) : []
    }
}

export default ContactList