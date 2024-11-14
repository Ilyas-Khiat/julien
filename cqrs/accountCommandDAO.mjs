import { ACCOUNT_LIST } from "./database.mjs";
import { Account } from "./account.mjs";

export function convertToJsonObject(account) {
    return JSON.parse(JSON.stringify(account));
}

export function convertToAccount(accountJSON) {
    return new Account(accountJSON);
}

export const accountCommandDAO = {

    insertAccount(account) {
        console.log(`--> Inserting account with name ${account.firstName} ${account.lastName}`);
        ACCOUNT_LIST.push(convertToJsonObject(account));
        account.bar="foo";
        console.log('Account created');
        return account.id;
    },
    
    updateAccount(account) {
        console.log(`--> Updating account with id ${account.id}`);
        const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);

        ACCOUNT_LIST[index] = convertToJsonObject(account);
    
        console.log('Acount updated');
        
        return account;
    },

    retreiveAccountById(id) {
        const accountJSON = ACCOUNT_LIST.find((acc) => acc.id === id);
        
        if (!accountJSON) {
        console.error(`Account with id ${id} not found`);
        return;
        }

        const account = convertToAccount(accountJSON);
    
        return account;
    }
};
