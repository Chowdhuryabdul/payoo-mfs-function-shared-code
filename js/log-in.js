document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
   const logInNumber = getInputFieldValueById('login-number');
   const logInPassword = getInputFieldValueById('login-password');
//    console.log('here i want to see the shared code', logInNumber, logInPassword);
   if(logInNumber === '4444' && logInPassword === '1234'){
    console.log('you are log in and forwarded to the home page');
    window.location.href = './index.html'
   }else{
    alert ('Your User Number or Password is incorrect')
   }
})