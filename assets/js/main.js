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
    var div = document.getElementById(`${type}-${index}`);
    div.style.display = 'block';
}

function validatePassengerNumbers(){
    const totalTravelling = Number(adults.options[adults.selectedIndex].value) + Number(children.options[children.selectedIndex].value);  
    
    if (totalTravelling){
        return true
    } else {
        alert('No one is travelling!');
    }
}

function displayPassengerInputs() {

    if (adults.options[adults.selectedIndex]){
        for(let i = 0; i <= children.options[children.selectedIndex]; i++){
            showPassenger('adult',i);
        }
    }

    if (children.options[children.selectedIndex]){
        for(let i = 0; i <= children.options[children.selectedIndex]; i++){
            showPassenger('child',i);
        }
    }
}

function hidePassengerInputs(){
    for(let i = 0; i <= 4;i++){
        var divAdult = document.getElementById(`adult-${i}`);   
        var divChild = document.getElementById(`child-${i}`); 
        
        if(divAdult.style.display === 'block'){
            divAdult.style.display = 'none';
        }
        if(divChild.style.display === 'block'){ 
            divChild.style.display = 'none';
        }
    }
}

function displayReturnDest() {
    const targetDiv = document.getElementById("returning");
    targetDiv.style.display = "block";
};

function hideReturnDest() {
    const targetDiv = document.getElementById("returning");
    targetDiv.style.display = "none";
};

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
    };
});

passengerBtn.addEventListener('click', () => {
    validNameOne()
    validNameTwo()
    validNameThree()
    validChildName()
});
  
paymentBtn.addEventListener('click', () => {
    //hidePassengerInputs();
    checkEmail();
    validName();
    myPhone();
});

