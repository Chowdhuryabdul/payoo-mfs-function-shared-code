function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber
}

function getTextFieldById(id){
    const textFieldValue = document.getElementById(id).innerText
    const textFieldValueNumber = parseFloat(textFieldValue)
    return textFieldValueNumber
}



function showASactionById (id){
    // hide all the sections 
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashed-out-form').classList.add('hidden')
    document.getElementById('transaction-form').classList.add('hidden')
    document.getElementById('bonus-form').classList.add('hidden')
    // show the section with the provided id as parameter 
    document.getElementById(id).classList.remove('hidden')
}