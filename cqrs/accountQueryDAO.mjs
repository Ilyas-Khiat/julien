
import { ACCOUNT_LIST } from './database.mjs';

export const accountQueryDAO = {

    retrieveAccountList() {
        return ACCOUNT_LIST.map((account) => {
          //get all but date
          const { creationDate, ...accountData } = account;
          return accountData;
        });
    
    },

    retrieveAccount(id) {
        const account = ACCOUNT_LIST.find((acc) => acc.id === id);
    
        if (!account) {
          console.error(`Account with id ${id} not found`);
          return;
        }
    
        const {firstName, lastName,...accountData} = account;
        return {'name':`${firstName} ${lastName}`, ...accountData};

    }

};
