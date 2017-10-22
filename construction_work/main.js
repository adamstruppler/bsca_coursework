function Account(balance){
    this.balance = balance;
    this.debit = 0;
    this.credit = 0;

    this.deposit = function deposit(){
        
    }
}

var testAccount = new Account(5000);

console.log(testAccount)