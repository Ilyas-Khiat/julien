import { Account } from './account.mjs';
import { accountCommandDAO } from './accountCommandDAO.mjs';

export const accountCommand = {

    addAccount(lastName, firstName) {
        // Create a new account
        const newAccount = new Account(lastName=lastName, firstName=firstName);
        // Save the account
        return accountCommandDAO.insertAccount(newAccount);
        
    },

    saveAccount(id, lastName, firstName) {
        const account = accountCommandDAO.retreiveAccountById(id);

        account.lastName = lastName;
        account.firstName = firstName;
        
        return accountCommandDAO.updateAccount(account);
    },


};
