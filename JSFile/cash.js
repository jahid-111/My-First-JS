console.log("Load From Cash JS");


document.getElementById('deposite').addEventListener('click', function(){

    // INPUT VALUE
    const dpsInput= document.getElementById('dps-input');
const dpsInputString=dpsInput.value;
const dpsValue=parseFloat(dpsInputString);

// if(dpsInput==="NaN"){

// alert('Provide nmber');
// }

//innerHTML 
const dpsCashInp=document.getElementById('dps-cash-inp');
const dpsCashInpString= dpsCashInp.innerText;
const dpsValueCash=parseFloat(dpsCashInpString);

const addValue= dpsValue+dpsValueCash;
dpsCashInp.innerText=addValue;


// curent

const curent= document.getElementById('curent');
const curentString= curent.innerText;
const curentValue= parseFloat(curentString);

const addValueCurrent=curentValue+dpsValue;
curent.innerText=addValueCurrent;
})
// ================ WITHDRAW

document.getElementById('wdw-btn').addEventListener('click', function(){

const wdwInp=document.getElementById('wdw-inp');
const wdwInpString=wdwInp.value;
const wdwValue= parseFloat(wdwInpString);
// console.log(typeof wdwValue);

//innerText

const wdwHtml=document.getElementById('wdw-html');
const wdwHtmlString= wdwHtml.innerText;
const wdwHtmlValue= parseFloat(wdwHtmlString);

const addaWdw= wdwValue+wdwHtmlValue;
wdwHtml.innerText=addaWdw;

// CURRENT 
const curent= document.getElementById('curent');
const curentString= curent.innerText;
const curentValue= parseFloat(curentString);

const addValueCurrent=curentValue-wdwValue;
curent.innerText=addValueCurrent;
})
