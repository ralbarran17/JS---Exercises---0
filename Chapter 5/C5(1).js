//Implement the following BANK ACCOUNT

function Account(name, balance){
    this.name = name;
    this.balance = balance;
  }
  
  Account.prototype.deposit = function(amount){
    if(this._Positive(amount)){
      this.balance += amount;
      console.info(`Deposit: ${this.name} new balance is ${this.balance}`); 
      return true;
    }
    return false;
  }
  
  Account.prototype.retrive = function(amount){
    if(this._isAllowed()){
      this.balance -= amount;
      console.log(`Retrive: ${this.name} new balence is ${this.balance}`);
      return true;
    }
    return false;
  }
  
  Account.prototype._isPositive = function(amount){
    const _isPositive = amount > 0;
    if(!_isPositive){
      console.error(`Amount must be positive!`);
      return false;
    }
    return true;
  }
  
  Account.prototype._isAllowed = function(amount){
    if(!this._isPositive(amount)) return false;
  
    const _isAllowed = this.balance - amount >= 0;
    if (!_isAllowed){
      console.error(`Insufficient funds!`);
      return false;
    }
    return true;
  }
  
  const a = new Account('Alex', 100);
  const b = new Account('Beto', 0);
  
  output.innerText += `before:  a: ${a.balance}, b: ${b.balance}\n`;
  

  
  