// bank.test.js
const bank = require('./bank');
const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfer');

test('La fonction retrieveBalance est appelée avec le bon accountId', () => {
    const retrieveBalanceSpy = jest.spyOn(bankDAO, 'retrieveBalance').mockImplementation(() => {});
    const testAccountId = '12345';

    bank.getBalance(testAccountId);

    expect(retrieveBalanceSpy).toHaveBeenCalledWith(testAccountId);

    retrieveBalanceSpy.mockRestore();
});

test('getBalance retourne le solde récupéré par retrieveBalance', () => {
    const testAccountId = '12345';
    const expectedBalance = 1000;
  
    jest.spyOn(bankDAO, 'retrieveBalance').mockReturnValue(expectedBalance);
  
    const balance = bank.getBalance(testAccountId);
  
    expect(balance).toBe(expectedBalance);
  
    bankDAO.retrieveBalance.mockRestore();
});

test('transferMoney appelle transfer avec les bons paramètres', () => {
    const transferSpy = jest.spyOn(bankTransfer, 'transfer').mockImplementation(() => Promise.resolve());
    const testAccountId = '12345';
    const testAmount = 500;

    bank.transferMoney(testAccountId, testAmount);

    expect(transferSpy).toHaveBeenCalledWith(testAccountId, testAmount);

    transferSpy.mockRestore();
});

test('debitAccount est appelée avec les bons paramètres après un transfert réussi', async () => {
    jest.spyOn(bankTransfer, 'transfer').mockResolvedValue();
    const debitAccountSpy = jest.spyOn(bankDAO, 'debitAccount').mockImplementation(() => {});
  
    const testAccountId = '12345';
    const testAmount = 500;
  
    await bank.transferMoney(testAccountId, testAmount);
  
    expect(debitAccountSpy).toHaveBeenCalledWith(testAccountId, testAmount);
  
    bankTransfer.transfer.mockRestore();
    debitAccountSpy.mockRestore();
});

test('debitAccount n\'est pas appelée si le transfert échoue', async () => {
    const transferError = new Error('Transfer failed');
    jest.spyOn(bankTransfer, 'transfer').mockRejectedValue(transferError);
    const debitAccountSpy = jest.spyOn(bankDAO, 'debitAccount').mockImplementation(() => {});
  
    const testAccountId = '12345';
    const testAmount = 500;
  
    await expect(bank.transferMoney(testAccountId, testAmount)).rejects.toThrow('Transfer failed');
  
    expect(debitAccountSpy).not.toHaveBeenCalled();
  
    bankTransfer.transfer.mockRestore();
    debitAccountSpy.mockRestore();
});
  
