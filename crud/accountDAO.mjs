import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {

  insertAccount(account) {
    console.log(`--> Inserting account with name ${account.firstName} ${account.lastName}`);
    ACCOUNT_LIST.push(account);
    console.log('Account created');
    return account;
  },

  retrieveAccountList() {
    return ACCOUNT_LIST.map((account) => {
      //get all but date
      const { creationDate, ...accountData } = account;
      return accountData;
    });

  },

  updateAccount(account) {
    console.log(`--> Updating account with id ${account.id}`);
    const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);
    if (index === -1) {
      console.error(`Account with id ${account.id} not found`);
      return;
    }
    
    ACCOUNT_LIST[index].firstName = account.firstName;
    ACCOUNT_LIST[index].lastName = account.lastName;

    console.log('Acount updated');
    
    return account;
  },

  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((acc) => acc.id === id);

    if (!account) {
      console.error(`Account with id ${id} not found`);
      return;
    }

    const {firstName, lastName,...accountData} = account;
    return {'name':`${firstName} ${lastName}`, ...accountData};
  },
};
