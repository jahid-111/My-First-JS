
console.log('File From Log Js');

document.getElementById('log-btn').addEventListener('click', function(){

const textInput= document.getElementById('mail-input');
const mailValue=textInput.value;

const pass=document.getElementById('pass');
const passValue= pass.value;

// ===========
// LOG CONDITON 

if( mailValue==="mymail@mail.com" && passValue === "123456"){
    window.location.href ="bank.html";
alert("You Are aboout to Enter your Cash")
}
else{
    alert('Please Enter Your Valid Data')
}
})