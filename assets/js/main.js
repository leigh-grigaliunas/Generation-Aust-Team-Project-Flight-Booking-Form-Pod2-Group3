

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


function validatePassengerDOB(passType,passIndex){
    const passID = passType + "-" + passIndex + "-dob";
    let passDOB = document.getElementById(passID).value;
    alert(passDOB);

    var dob = new Date(passDOB);
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    // Now access the values as below
    if((age > 18 && type === "adult") || (age < 18 && type === "child")){
        return true;
    } else {
        alert("A passsenger has entered an incorrect age. Please check and resubmit.");
        return false;
    }
}

function validatePassengerName(passType,passIndex)
 {
    let passID = passType + "-" + passIndex + "-name";
    let userName=document.getElementById(passID).value;
    if(userName == "null" || userName == " ")
    {
       alert('Please enter the name in the required format');
       return false;
    }
    else if(userName.length<6)
    {
        alert("The passenger name must be at least 6 characters long.");
        return false;
    }
    else if( userNameRegex = "[a-zA-Z]{6}")
    {
        return true;
    }
 }

function validatePassengerInputs() {
    const numAdult = Number(adults.options[adults.selectedIndex].value);
    const numChild = Number(children.options[children.selectedIndex].value);
    let adultNamePass = 0;
    let childNamePass = 0;
    let adultDOBpass = 0;
    let childDOBPass = 0;

    // validate adult passengers
    if (numAdult){
        for(let i = 1; i <= numAdult; i++){
            if(validatePassengerName("adult", i)){
                adultNamePass++;
            }
            if(validatePassengerDOB("adult", i)){
                adultDOBpass++;
            }
        }
    }

    // validate children passengers
    if (numChild){
        for(let i = 1; i <= numChild; i++){
            if(validatePassengerName("child",i)){
                childNamePass++;
            }
            if(validatePassengerDOB("child", i)){
                childDOBPass++;
            }
        }
    }

    // returns result based on all passengers
    if ((numAdult === adultNamePass) && (numChild === childNamePass) && (numAdult === adultDOBpass)){
        return true;
    } else {
        return false;
    }
}


// Lekshmi's JS

const passenger1Name = document.getElementById("pass-1-name");
const passenger2Name = document.getElementById("pass-2-name");
const passenger3Name = document.getElementById("pass-3-name");
const childName = document.getElementById("pass-4-name");

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
    } else {
        alert("Error in flight details.")
        flightOneWay.focus;
    };
});

passengerBtn.addEventListener('click', () => {
    // validNameOne();
    // validNameTwo();
    // validNameThree();
    // validChildName();
    if(validatePassengerInputs()){
        displayPaymentDetails();
    } else {
        alert("One or more of the passenger details have been incorrectly entered. Please check and resubmit")
    }
    
});
  
paymentBtn.addEventListener('click', () => {
    checkEmail();
    validName();
    myPhone();
    hidePassengerInputs();
    hidePaymentDetails();
});

