const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', function(){
  describe('constructor', function(){
    it('construct a new account object', function(){
   const a1 = new Account('Sara',500);
    expect(a1).to.be.instanceof(Account);
    expect(a1.name).to.be.equal('Sara');
    expect(a1.number).to.be.length(36);
    expect(a1.balance).to.be.equal(500);
    expect(a1.deposits).to.be.length(0);
    expect(a1.withdrawals).to.be.length(0);
    });
  });
});
