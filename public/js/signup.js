const signupForm = document.querySelector("#signup");
signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        nurse_id:document.querySelector("#signupNurseId").value,
        name:req.document.querySelector("#signupName").value,
        email:req.document.querySelector("#signupEmail").value,
        password:req.document.querySelector("#signupPassword").value,
        phone_number:document.querySelector("#signupPhoneNumber").value,
        bio:req.document.querySelector("#signupBio").value,
        referral:document.querySelector("#signupReferral").value,
        street_address:document.querySelector("#signupStreetAddress").value,
        city:document.querySelector("#signupCity").value,
        zip_code:document.querySelector("#signupZipCode").value,
        is_driving:document.querySelector("#signupIsDriving").value,
        // shift_info:document.querySelector("#signupNurseId").value,
        // license_plate:document.querySelector("#signupNurseId").value,
        // car_make:document.querySelector("#signupNurseId").value,
        // car_model:document.querySelector("#signupNurseId").value,
        // car_color:document.querySelector("#signupNurseId").value,
        HospitalId:document.querySelector("#signupHospital").value,
        // ShiftId:document.querySelector("#signupNurseId").value,
        
    }
    fetch("/signup",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           alert("success!")
           return res.json()
        } else {
            alert("trumpet sound")
            location.reload();
        }
    }).then(data=>{
        location.href = `/user/${data.id}`
    })
})