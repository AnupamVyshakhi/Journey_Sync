let email = "abc@gmail.com";
let password = "abc123";

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");



document.querySelector("#loginPassword").value = "";
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";

  document.querySelector("#loginEmail").value = "";
  document.querySelector("#loginPassword").value = "";
});

loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

let forms = document.querySelectorAll("form");
console.log(forms,'form')

forms[0].addEventListener("submit", login);

phoneInput.addEventListener('blur', () => {
  // Phone number validation logic here
  const phoneNumber = phoneInput.value;
  let errorMessage = "";

  if (!/^\d+$/.test(phoneNumber)) {
    errorMessage = "Phone number must contain only digits.";
  } else if (phoneNumber.length !== 10) {  // Adjust according to your required length
    errorMessage = "Phone number must be 10 digits long.";
  } 

  phoneError.textContent = errorMessage;  // Update error message content
  phoneError.classList.toggle('active', errorMessage !== "");  // Show/hide error message
});

function login(event){
  event.preventDefault();
  let mail = document.querySelector("#loginEmail");
  let pass = document.querySelector("#loginPassword");

  if(mail.value == email && pass.value == password){
    document.querySelector("#success").classList.add("open-success");
  } else {
    document.querySelector("#error").classList.add("open-error");
  }
}


function closeSuccess(){
  document.querySelector("#success").classList.remove("open-success");
}

function closeError(){
  document.querySelector("#error").classList.remove("open-error");
}



// function Signup(e){
//   e.preventDefault();
//   console.log("function working")
// const signupEmail=document.getElementById("SignEmail").value;
// const signupPass=document.getElementById('SignPassword').value;
// const signupName=document.getElementById('SignName').value;
// const signNumber=document.getElementById('SignNumber').value;

// console.log("signup data",signNumber,signupEmail,signupName,signupPass);


// }














// <script>
// function postData() {
//     const token = '441739311aeaf2eedea738f4562f65d86fbde3a3'; // Replace 'YOUR_AUTH_TOKEN_HERE' with your actual token

//     const fullName = document.querySelector('.login input[type="text"][placeholder="Full Name"]').value;
//     const emailAddress = document.querySelector('.login input[type="email"][placeholder="Email Address"]').value;
//     const mobileNumber = document.querySelector('.login input[type="text"][placeholder="Mobile Number"]').value;
//     const password = document.querySelector('.login input[type="password"][placeholder="Password"]').value;

//     const requestData = {
//         fullName: fullName,
//         emailAddress: emailAddress,
//         mobileNumber: mobileNumber,
//         password: password
//     };

//     console.log('Data received');
    
//     fetch('https://safar-com-backend.onrender.com/accounts/v1/signup', {
//         method: 'POST',
//         headers: {
//             'Authorization': `Token ${token}`,
//             'Content-Type': 'application/json' // Specify the content type as JSON
//         },
//         body: JSON.stringify(requestData) // Convert requestData to JSON string
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Do something with the response data
//         console.log(data);
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }
// </script>