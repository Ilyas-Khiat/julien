import { Account } from "./account.mjs";
import { convertToJsonObject, convertToAccount } from "./accountCommandDAO.mjs";
import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";


const lastName = "ilyas";
const firstName = "khiat";

// Create a new account
const account1ID = accountCommand.addAccount(lastName, firstName);
console.log(`Account created with id ${account1ID}`);

//LIST ACCOUNTS
const listAccounts = accountQuery.getAccountList();
console.log("List of accounts:");
console.log(listAccounts);

// Get the account
const account1 = accountQuery.getAccount(account1ID);
console.log("Retrieved account:");
console.log(account1);

// Update the account
const account1_updated = accountCommand.saveAccount(account1ID, "ilyas", "chabanne");

// Get the account
const account1_retrieved = accountQuery.getAccount(account1ID);
console.log("Retrieved account:");
console.log(account1_retrieved);

// //Convert account to JSON
// const account1JSON = convertToJsonObject(account1);

// console.log("Account as JSON:");

// console.log(account1JSON);

// //convert json to new account
// const account1_ = convertToAccount(account1JSON);

// console.log("Account as object:");
// console.log(account1_);

// // Create a new account
// const account1 = accountService.addAccount(lastName, firstName);

// // Get the list of accounts
// const listAcounts = accountService.getAccountList();  

// console.log("List of accounts:");
// console.log(listAcounts);

// // Update the account
// const account1_updated = accountService.saveAccount(account1.id, "ilyas", "chabanne");

// // Get the list of accounts
// const listAcounts_updated = accountService.getAccountList();

// console.log("List of accounts after update:");
// console.log(listAcounts_updated);

// // Get the account
// const account1_retrieved = accountService.getAccount(account1.id);

// console.log("Retrieved account:");  
// console.log(account1_retrieved);
