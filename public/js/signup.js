const signupForm = document.querySelector("#signupForm");
const isDriving = document.querySelector("#signupIsDriving");
const drivingForm = document.querySelector(".driving-box");
const email = document.getElementById("signupEmail")
const emailError = document.querySelector("#signupEmail + span.error")
const password = document.getElementById("signupPassword")
const passwordError = document.querySelector("signupPassword")
const nurseId = document.getElementById("signupNurseId")
const nurseIdError = document.querySelector("#signupNurseId + span.error")
const userName =document.getElementById("signupName")
const userNameError=dcoument.querySelector("#signupName + span.error")

signupForm.addEventListener("submit", async e => {
    e.preventDefault();

    const RNvalue = document.querySelector("#signupNurseId").value

    const userObj = {
        nurse_id: RNvalue,
        name: document.querySelector("#signupName").value,
        email: document.querySelector("#signupEmail").value,
        password: document.querySelector("#signupPassword").value,
        phone_number: document.querySelector("#signupPhoneNumber").value,
        bio: document.querySelector("#signupBio").value,
        referral: document.querySelector("#signupReferral").value,
        street_address: document.querySelector("#signupStreetAddress").value,
        city: document.querySelector("#signupCity").value,
        zip_code: document.querySelector("#signupZipCode").value,
        is_driving: document.querySelector("#signupIsDriving").value,
        // shift_info: document.querySelector("#signupNurseId").value,
        license_plate: document.querySelector("#signupLicensePlate").value,
        car_make: document.querySelector("#signupCarMake").value,
        car_model: document.querySelector("#signupCarModel").value,
        car_color: document.querySelector("#signupCarColor").value,
        // HospitalId: document.querySelector("#signupHospital").value,
        // ShiftId: document.querySelector("#signupNurseId").value,
    };

    console.log(userObj);

    const isRegisteredNurse = await checkRegisteredNurseStatus(RNvalue);

    // TODO: Get this async await working properly
    console.log("OUTSIDE THE FUNCTION TO CHECK:");
    console.log(isRegisteredNurse);
    
    if(isRegisteredNurse) {
        console.log("IS A RN!!!");
        fetch("/api/users/signup", {
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                alert("success!")
                location.href = `/`;
                // TODO: When we go to profile, we will need this instead of the redirect above.
                // return res.json();
            } else {
                alert("trumpet sound")
                location.reload();
            }
        });
    } else {
        console.log("NOT A RN----");
    };


    // TODO: Right now, redirects to homepage on login. We want it to go to profile.
    // .then(data=>{
    //     location.href = `/`;
    // });
});

function showCarForm() {
    if(isDriving.checked == true) {
        drivingForm.style.display = "block";
    } else {
        drivingForm.style.display = "none";
    };
};

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        mailError();
    }
});

function mailError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an e-mail address.";
    } else if (email.validity.typeMismatch) {
    
      emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
   
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
  
  
    emailError.className = "error active";
}




// userName.addEventListener("input", (event) => {
//     if (nurseId.validity.valid) {
//         nurseIdError.textContent = "";
//         nurseId.className = "error";
//     } else {
//         nurseError();
//     }
// });





 


//   function pwordError() {
//     if (password.validity.valueMissing) {
//       passwordError.textContent = "Please enter a password";
//     } else if (password.validity.tooShort) {
      
//       passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
//     }

//     passwordError.className = "error active";
//   }




// function nurseError() {
//     if (nurseId.validity.valueMissing) {
//       nurseIdError.textContent = "Please enter a password";
//     } else if (nurseId.validity.tooShort) {
      
//       nurseIdError.textContent = `Nurse Id  should be at least ${nurseId.minLength} characters and start with RN; you entered ${nurseId.value.length}.`;
//     }

//     nurseIdError.className = "error active";
//   }



// function userError() {
//     if (userName.validity.valueMissing) {
//       userNameError.textContent = "Please your First and Last name ";

//     userNameError.className = "error active";
//   }
// };



