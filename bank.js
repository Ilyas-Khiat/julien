// bank.js
const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfer');

const bank = {
    getBalance: function (accountId) {
        return bankDAO.retrieveBalance(accountId);
    },
    transferMoney: function (accountId, amount) {
        return bankTransfer.transfer(accountId, amount)
        .then(() => {
            bankDAO.debitAccount(accountId, amount);
        })
        .catch((error) => {
            console.log('Transfer failed:', error);
            throw error; // Propager l'erreur
        });
    },
};

module.exports = bank;
