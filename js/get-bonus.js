document.getElementById('bonus-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addedAmountForBonus = getInputFieldValueById('adding-amount-input-for-bonus');
    const bonusPin = getInputFieldValueById('bonus-pin');
    if (bonusPin === 1234) {
        if (addedAmountForBonus > 500) {
            const existingBalance = getTextFieldById('existing-balance')
            // console.log(existingBalance);
            const bonusPercentage = addedAmountForBonus / 10;
            const updatedBalance = bonusPercentage + existingBalance + addedAmountForBonus;
            // console.log(updatedBalance);
            document.getElementById('existing-balance').innerText = updatedBalance
            // 
            const p = document.createElement('p');
            p.innerText = `Bonus Amount is Tk.${bonusPercentage} and Total Amount is Tk.${updatedBalance}`
            p.classList.add('italic', 'bg-purple-300')
            document.getElementById('transactio-container').appendChild(p)
        } else {
            const existingBalance = getTextFieldById('existing-balance')
            const updatedBalance = addedAmountForBonus + existingBalance
            document.getElementById('existing-balance').innerText = updatedBalance
            const p = document.createElement('p');
            p.classList.add('font-bold', 'bg-yellow-500')
            p.innerText = `No added bonus! added amount${addedAmountForBonus} and The total balance is Tk.${updatedBalance}`
            document.getElementById('transactio-container').appendChild(p)
        }
    } else {
        alert('Your Usernumber or Password is wrong')
    }
})