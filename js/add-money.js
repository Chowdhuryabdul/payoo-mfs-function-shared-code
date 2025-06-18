document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    const addingAmount = getInputFieldValueById('adding-amount-input');
    const addingAmountPin = getInputFieldValueById('adding-amount-pin')

    // verifying to check the addingAmount is not a number 
    if(isNaN (addingAmount)){
        alert ('failed to add money')
        return;
    }
    if(addingAmountPin === 1234){
        console.log('pls add money');
        const existingbalance = getTextFieldById('existing-balance');
        const updatedBalance = existingbalance + addingAmount;
        document.getElementById('existing-balance').innerText = updatedBalance

        // add to transaction section 
        const div = document.createElement('div')
        div.classList.add('bg-red-600')
        div.innerHTML = `
        <p class = "text-2xl text-center">Added Amount: Tk.${addingAmount} and New balance is Tk.${updatedBalance} </p>
        `
        document.getElementById('transactio-container').appendChild(div)
    }else{
        alert ('Your UserName or Pin is wrong')
    } 
});