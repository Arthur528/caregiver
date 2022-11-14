<<<<<<< HEAD
const removeProfile = document.querySelectorAll("removeProfile");
=======
const changePictureButton   = document.getElementById('profile-picture');
const deleteHospitalButtons = document.querySelectorAll('.all-hospitals');
const deleteShiftButton     = document.getElementById('delete-shift');
const editProfileButton     = document.getElementById('edit-profile');
const deleteProfileButton   = document.getElementById('delete-profile');
>>>>>>> dev

changePictureButton.addEventListener("click", e => {

<<<<<<< HEAD
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

=======
});

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

editProfileButton.addEventListener("click", e => {

});

deleteProfileButton.addEventListener("click", e => {

});
>>>>>>> dev
