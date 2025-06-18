document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById('cash-out-input');
    const cashOutPin = getInputFieldValueById('cash-out-pin');
    console.log('show the cash out form', cashOutAmount, cashOutPin);
    if(cashOutPin === 1234){
        const existingbalance = getTextFieldById('existing-balance');
        if(cashOutAmount > existingbalance){
            alert ('You do not have sufficient amount')
            return;
        }
        const updatedBalance = existingbalance - cashOutAmount;
        document.getElementById('existing-balance').innerText = updatedBalance;
        const p = document.createElement('p');
        // p.classList.add('text-2xl, font-bold, italic')
        p.innerText = `Cashed-out Amount: Tk.${cashOutAmount} and Remaining Amount is tk.${updatedBalance}`
        document.getElementById('transactio-container').appendChild(p)
    }else{
        alert ('Your Usernmae or Pin is wrong')
    }
})