import {Account} from "./account.mjs";
import {accountDAO} from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    // Create a new account
    const newAccount = new Account(lastName=lastName, firstName=firstName);
    // Save the account
    return accountDAO.insertAccount(newAccount);
    
  },
  getAccountList() {
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    const account = new Account(lastName, firstName, id);
    return accountDAO.updateAccount(account);
  },
  getAccount(id) {
    return accountDAO.retrieveAccount(id);
  },
};
