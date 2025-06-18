document.getElementById('add-money-btn-show').addEventListener('click', function(){
    console.log('want to see how its work');
    showASactionById('add-money-form')
})

document.getElementById('cash-out-btn-show').addEventListener('click', function(){
    showASactionById('cashed-out-form')
})

document.getElementById('transaction-history-show-btn').addEventListener('click', function(){
    showASactionById('transaction-form')
})

document.getElementById('bonus-show-btn').addEventListener('click', function(){
    showASactionById('bonus-form')
})