// bankDAO.js
const bankDAO = {
    retrieveBalance: function (accountId) {
      console.log("Retrieve balance for account:", accountId);
      return 1000;
    },
    debitAccount: function (accountId, amount) {
      console.log(`Debit account ${accountId} by amount ${amount}`);
    },
};
  
module.exports = bankDAO;
  