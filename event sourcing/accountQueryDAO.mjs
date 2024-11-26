
import { ACCOUNT_LIST } from './database.mjs';
import { ccountSummaryList } from './queryDatabase.mjs';

export const accountQueryDAO = {

    retrieveAccountList() {
        return ccountSummaryList ;
    },

    retrieveAccount(id) {
        const account = ccountSummaryList.find((acc) => acc.id === id);
    
        if (!account) {
          console.error(`Account with id ${id} not found`);
          return;
        }
    
        const {firstName, lastName,...accountData} = account;
        return {'name':`${firstName} ${lastName}`, ...accountData};

    }

};
