const removeProfile = document.querySelectorAll("removeProfile");

// changePictureButton.addEventListener("click", e => {


// });
removeProfile.forEach(btn=>{
    btn.addEventListener("click",e=>{
        const idToRemove = e.target.getAttribute("user-id");
        fetch(`/profile/${idToRemove}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
               location.reload()
            } else {
                alert("trumpet sound")

            }
        })
    })
})


deleteHospitalButtons.forEach(button => {
    button.addEventListener("click", e => {
        const idToRemove = e.target.parentElement.id;
        
        // fetch()
        console.log(idToRemove);
    });
});

// deleteShiftButton.addEventListener("click", e => {
//     const idToRemove = e.target.parentElement;
//     console.log(idToRemove);
// });

// editProfileButton.addEventListener("click", e => {

// });

// deleteProfileButton.addEventListener("click", e => {

// });
>>>>>>> dev
