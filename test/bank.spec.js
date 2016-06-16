const expect = require('chai').expect;
const Account = require('../lib/account.js');
const Bank = require('../lib/bank.js');

describe('Bank', () => {
  describe('constructor', () => {
    it('constructs a new bank object', () => {
      const bank1 = new Bank('Bank of America');
      expect(bank1).to.be.instanceof(Bank);
      expect(bank1.name).to.be.equal('Bank of America');
      expect(bank1.accounts).to.be.length(0);
    });
  });
  describe('#addAccount', () => {
    it('Add Account to the Bank', () => {
      const bank1 = new Bank('Bank of America');
      const acct1 = new Account('Sara Account');
      bank1.addAccount(acct1);
      expect(bank1.accounts).to.be.length(1);
      const acct2 = new Account('Aaron Account');
      bank1.addAccount(acct2);
      expect(bank1.accounts).to.be.length(2);
    });
  });
  describe('#getValue', () => {
    it("finds the total value of all of the bank's accounts", () => {
      const bank2 = new Bank('Local Bank');
      const acct1 = new Account('Jill Account');
      acct1.deposit(200);
      bank2.addAccount(acct1);
      expect(bank2.getValue()).to.be.equal(200);
      const acct2 = new Account('Luis Account');
      bank2.addAccount(acct2);
      acct2.deposit(150);
      acct2.deposit(150);
      expect(bank2.getValue()).to.be.equal(500);
    });
  });
});
