const name = document.getElementById("name");
const date = document.getElementById("date");
const gender = document.getElementById("gender");
const number = document.getElementById("number");
const email = document.getElementById("email");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const number1 = document.getElementById("number1");
const text3 = document.getElementById("text3");
const maritalstatus = document.getElementById("maritalstatus");
const relationship = document.getElementById("relationship");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const yesno = document.getElementById("yes_no");
const submit = document.getElementById("submit");
const outputName = document.getElementById("outputName");
const outputDOB = document.getElementById("outputDOB");
const outputgender = document.getElementById("outputgender");
const outputContact = document.getElementById("outputContact");
const outputEmail = document.getElementById("outputEmail");
const outputstreet = document.getElementById("outputstreet");
const outputcity = document.getElementById("outputcity");
const outputpincode = document.getElementById("outputpincode");
const outputstate = document.getElementById("outputstate");
const outputrelationship = document.getElementById("outputrelationship");
const outputweight = document.getElementById("outputweight");
const outputheight = document.getElementById("outputheight");
const outputmaritalstauts = document.getElementById("outputmaritalstauts");
const outputyesno = document.getElementById("outputyesno");


function fun(){
  outputName.innerHTML =  "Name: "+ name.value;
   outputDOB.innerHTML = "Date of Birth: "  +date.value;
  outputgender.innerHTML =" Gender: " + gender.value;
    outputContact.innerHTML =  "Contact Number: " + number.value;
  outputEmail.innerHTML = "Email: " + email.value;
  outputstreet.innerHTML = "Street: " + text1.value;
  outputcity.innerHTML = "City: " + text2.value;
  outputpincode.innerHTML = "Pin Code: " + number1.value;
  outputstate.innerHTML = "Sate: " + text3.value;
  outputmaritalstauts.innerHTML = "MaritalStatus: " + maritalstatus.value;
  outputrelationship.innerHTML = "Relationship: " + relationship.value;
 
  outputweight.innerHTML = "Weight(kg): " + number3.value;
  outputheight.innerHTML ="Height: " +number4.value;
  outputyesno.innerHTML = "Taking any medications,currently: " + yesno.value;
  // outputgender.innerHTML =" Gender: " + gender.value;
  
  
}
submit.addEventListener('click', fun);