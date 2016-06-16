const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  describe('constructor', () => {
    it('constructs a new account object', () => {
      const acct1 = new Account('Sara');
      expect(acct1).to.be.instanceof(Account);
      expect(acct1.name).to.be.equal('Sara');
      expect(acct1.number).to.be.length(36);
      expect(acct1.balance).to.be.equal(0);
      expect(acct1.deposits).to.be.length(0);
      expect(acct1.withdrawals).to.be.length(0);
    });
  });

  describe('#deposit', () => {
    it('deposit money in the account and return balance', () => {
      const acct2 = new Account('Joe');
      const initialBalance = acct2.balance;
      expect(initialBalance).to.be.equal(0);
      const returnedBalance = acct2.deposit(10);
      expect(acct2.deposits.length).to.be.equal(1);
      expect(returnedBalance).to.be.equal(10);
    });
  });

  describe('#withdraw', () => {
    it('withdraws money from the account and returns the current balance', () => {
      const acct3 = new Account('Heidi');
      acct3.deposit(20);
      const changedBalance = acct3.withdraw(5);
      expect(changedBalance).to.be.equal(15);
      expect(acct3.withdrawals.length).to.be.equal(1);
    });
    it("doesn't allow withdrawals greater than the current balance", () => {
      const acct4 = new Account('Aidan');
      acct4.deposit(150);
      acct4.withdraw(200);
      expect(acct4.balance).to.be.equal(150);
      expect(acct4.withdrawals.length).to.be.equal(0);
    });
  });
});
