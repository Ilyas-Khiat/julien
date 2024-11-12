
function transfer(accountId, amount) {
    console.log(`Transferring ${amount} from account ${accountId}`);
    return Promise.resolve(); // Simule un transfert réussi
}
  
module.exports = { transfer };
  