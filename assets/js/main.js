// Leigh's JS

const passengerContainer = document.getElementById("passenger-details");
const paymentContainer = document.getElementById("payment-details");
const flight = document.getElementById("flight-details");
const adults = document.getElementById("adults-travelling");
const children = document.getElementById("children-travelling");
const flightBtn = document.getElementById("flight-btn");
const passengerBtn = document.getElementById("passenger-btn");
const paymentBtn = document.getElementById("payment-btn");
const flightOneWay = document.getElementById("one-way"); 

function showPassenger(type,index){
    var eleID = type + "-" + index;
    var div = document.getElementById(eleID);
    div.style.display = 'block';
}

function validatePassengerNumbers(){
    const totalTravelling = Number(adults.options[adults.selectedIndex].value) + Number(children.options[children.selectedIndex].value);  
    
    if (totalTravelling){
        return true
    } else {
        alert('Error: Please select at least one passenger.');
        adults.focus;
    }
}

function displayPassengerInputs() {
    const numAdult = Number(adults.options[adults.selectedIndex].value)
    const numChild = Number(children.options[children.selectedIndex].value)
    var divPassenger = document.getElementById("passenger-details");
    divPassenger.style.display = 'block';

    if (numAdult){
        for(let i = 1; i <= numAdult; i++){
            showPassenger('adult',i);
        }
    }
    if (numChild){
        for(let i = 1; i <= numChild; i++){
            showPassenger('child',i);
        }
    }
}

function hidePassengerInputs(){
    for(let i = 1; i <= 4;i++){
        const idAdult = "adult-" + i;
        const idChild = "child-" + i;
        var divAdult = document.getElementById(idAdult);  
        var divChild = document.getElementById(idChild); 

        if(divAdult.style.display === "block"){
            divAdult.style.display = "none";
        }
        if(divChild.style.display === "block"){ 
            divChild.style.display = "none";
        }
    }
    var divPassenger = document.getElementById("passenger-details");
    divPassenger.style.display = 'none';
}

function displayReturnDest() {
    const targetDiv = document.getElementById("returning");
    targetDiv.style.display = "block";
};

function hideReturnDest() {
    const targetDiv = document.getElementById("returning");
    targetDiv.style.display = "none";
};

function displayPaymentDetails(){
    var divPayment = document.getElementById("payment-details");
    divPayment.style.display = "block";
};

function hidePaymentDetails(){
    var divPayment = document.getElementById("payment-details");
    divPayment.style.display = 'none';
};



// Lekshmi's JS

// const passenger1Name = document.getElementById("pass-1-name");
// const passenger2Name = document.getElementById("pass-2-name");
// const passenger3Name = document.getElementById("pass-3-name");
// const childName = document.getElementById("pass-4-name");

function validatePassengerName(passID)
 {

    let userName=document.getElementById(passID).value;
    if(userName == "null" || userName == " ")
    {
       alert('Please enter the name in the required format') ;
       return false;
    }
    else if(userName.length<6)
    {
        alert("The passenger name must be at least 6 characters long.");
        return false;
    }
    else if( userNameRegex = "[a-zA-Z]{6}")
    {
        return userNameRegex.test(userName);
    }
 }
function getPassID() {
    const numAdult = Number(adults.options[adults.selectedIndex].value)
    const numChild = Number(children.options[children.selectedIndex].value)
 
    if (numAdult){
        for(let i = 1; i <= numAdult; i++){
            validatePassengerName("adult-" + i);
        }
    }
    if (numChild){
        for(let i = 1; i <= numChild; i++){
            showPassenger("child-" + i);
        }
    }
}


function validNameOne()
 {
    let userName=document.getElementById("pass-1-name").value;
    if(userName == "null" || userName == " ")
    {
       alert('Please enter the name in the required format') ;
       return false;
    }
    else if(userName.length<6)
    {
        alert("The passenger name must be at least 6 characters long.");
        return false;
    }
    else if( userNameRegex = "[a-zA-Z]{6}")
    {
        return userNameRegex.test(userName);
    }
 }
 function validNameTwo()
 {
    let userName=document.getElementById("pass-2-name").value;
    if(userName == "null" || userName == " ")
    {
       alert('Please enter the name in the required format') ;
       return false;
    }
    else if(userName.length<6)
    {
        alert("The passenger name must be at least 6 characters long.");
        return false;
    }
    else if( userNameRegex = "[a-zA-Z]{6}")
    {
        return userNameRegex.test(userName);
    }
 }
 function validNameThree()
 {
    let userName=document.getElementById("pass-3-name").value;
    if(userName == "null" || userName == " ")
    {
       alert('Please enter the name in the required format') ;
       return false;
    }
    else if(userName.length<6)
    {
        alert("The passenger name must be at least 6 characters long.");
        return false;
    }
    else if( userNameRegex = "[a-zA-Z]{6}")
    {
        return userNameRegex.test(userName);
    }
 }
 function validChildName()
 {
    let userName=document.getElementById("pass-4-name").value;
    if(userName == "null" || userName == " ")
    {
       alert('Please enter the name in the required format') ;
       return false;
    }
    else if(userName.length<6)
    {
        alert("The passenger name must be at least 6 characters long.");
        return false;
    }
    else if( userNameRegex = "[a-zA-Z]{6}")
    {
        return userNameRegex.test(userName);
    }
 }

 // Sandeep's JS

function validName() {
    let username = document.getElementById("payment-name").value;
    if (username == "" || username == "null") {
        alert("Name must be filled out in the requested format");
        return false;
    }
}
function myPhone() {
    // Get the value of the input field with id="numb"
    let phoneE = document.getElementById("payment-phone").value;
    // If phone is Not a Number or less than one or greater than 10
    let numb;
    if (isNaN(phoneE) || x < 1 || x > 10) {
        numb = "Input not valid";
    } else {
        numb = "Input OK";
    }
    document.getElementById("phone").innerHTML = number;
}
//   how to set validation for email in javascript:
function checkEmail() {
    var emailE = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(emailE.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
}

//  Event listeners
flightBtn.addEventListener('click', () => {
    if(validatePassengerNumbers()){
        displayPassengerInputs();
    };
});

passengerBtn.addEventListener('click', () => {
    // validNameOne();
    // validNameTwo();
    // validNameThree();
    // validChildName();
    displayPaymentDetails();
});
  
paymentBtn.addEventListener('click', () => {
    checkEmail();
    validName();
    myPhone();
    hidePassengerInputs();
    hidePaymentDetails();
});

