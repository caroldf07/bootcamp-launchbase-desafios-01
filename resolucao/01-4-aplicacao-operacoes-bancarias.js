const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }
  
  ///new transaction
  function createTransaction(transaction){
    user.transactions.push(transaction)
    
    if(transaction.type == "credit"){
      user.balance += transaction.value
    } else {
      user.balance -= transaction.value
    }
  }
  
  
  //Higher per type
  function getHigherTransactionByType (type){
    let higherValue = 0
    let higherTransaction
  
    for (let transaction of user.transactions){
      if(type == transaction.type && transaction.value > higherValue){
        higherValue = transaction.value
        higherTransaction = transaction
      }
    }
    
    return higherTransaction
    
  }
  
  //Average
  function getAverageTransactionValue (){
    let sumValue = 0
    
    for (let transaction of user.transactions){
      sumValue+= transaction.value
    }
    
    return (sumValue/user.transactions.length)
  }
  
  //counting
  
  function getTransactionsCount(){
    let countCredit = 0
    let countDebit = 0
    for (let transaction of user.transactions){
      if(transaction.type == "credit"){
        countCredit++
      } else {
        countDebit++
      }
    }
    
    return {credit: countCredit, debit: countDebit}
  }
  
  createTransaction({type: 'credit',value: 50.5})
  createTransaction({type: 'credit',value: 100})
  createTransaction({type: 'debit',value: 300})
  createTransaction({type: 'debit',value: 10})
  
  var x = getHigherTransactionByType ("credit")
  console.log(x)
  
  var y = getAverageTransactionValue (user)
  console.log(y)
  
  var z = getTransactionsCount (user)
  console.log(z)