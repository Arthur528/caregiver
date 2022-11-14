const signupForm = document.querySelector("#signupForm");
const isDriving = document.querySelector("#signupIsDriving");
const drivingForm = document.querySelector(".driving-box");

signupForm.addEventListener("submit", e => {
    e.preventDefault();

    const userObj = {
        nurse_id:document.querySelector("#signupNurseId").value,
        name:document.querySelector("#signupName").value,
        email:document.querySelector("#signupEmail").value,
        password:document.querySelector("#signupPassword").value,
        phone_number:document.querySelector("#signupPhoneNumber").value,
        bio:document.querySelector("#signupBio").value,
        referral:document.querySelector("#signupReferral").value,
        street_address:document.querySelector("#signupStreetAddress").value,
        city:document.querySelector("#signupCity").value,
        zip_code:document.querySelector("#signupZipCode").value,
        is_driving:document.querySelector("#signupIsDriving").value,
        // shift_info:document.querySelector("#signupNurseId").value,
        license_plate:document.querySelector("#signupLicensePlate").value,
        car_make:document.querySelector("#signupCarMake").value,
        car_model:document.querySelector("#signupCarModel").value,
        car_color:document.querySelector("#signupCarColor").value,
        // HospitalId:document.querySelector("#signupHospital").value,
        // ShiftId:document.querySelector("#signupNurseId").value,
    };

    console.log(userObj);

    fetch("/api/users/signup",{
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
    })

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