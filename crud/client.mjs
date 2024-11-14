import { accountService } from "./accountService.mjs";

const lastName = "ilyas";
const firstName = "khiat";

// Create a new account
const account1 = accountService.addAccount(lastName, firstName);

// Get the list of accounts
const listAcounts = accountService.getAccountList();  

console.log("List of accounts:");
console.log(listAcounts);

// Update the account
const account1_updated = accountService.saveAccount(account1.id, "ilyas", "chabanne");

// Get the list of accounts
const listAcounts_updated = accountService.getAccountList();

console.log("List of accounts after update:");
console.log(listAcounts_updated);

// Get the account
const account1_retrieved = accountService.getAccount(account1.id);

console.log("Retrieved account:");  
console.log(account1_retrieved);