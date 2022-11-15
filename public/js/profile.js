const changePictureButton   = document.getElementById('profile-picture');
const deleteHospitalButtons = document.querySelectorAll('.all-hospitals');
const deleteShiftButton     = document.getElementById('delete-shift');
const editProfileButton     = document.getElementById('edit-profile');
const deleteProfileButton   = document.getElementById('delete-profile');
const addFavoritesButtion = document.querySelectorAll('.add-id');

// changePictureButton.addEventListener("click", e => {

// });

// deleteHospitalButtons.forEach(button => {
//     button.addEventListener("click", e => {
//         const idToRemove = e.target.parentElement.id;
        
//         //  fetch()
//         console.log(idToRemove);
//     });
// });

// deleteShiftButton.addEventListener("click", e => {
//     const idToRemove = e.target.parentElement;
//     console.log(idToRemove);
// });

// editProfileButton.addEventListener("click", e => {

// });


deleteProfileButton.addEventListener("click" , e=>{
    const idToRemove = e.target.getAttribute("data-id");
    fetch(`/api/users/${idToRemove}`,{
        method:"DELETE"
    }).then(res=>{
        if(res.ok){
            location.reload()
        }else{
            alert("failed")

        }
    })

});

addFavoritesButtion.forEach(button=>{
    button.addEventListener("click" , e=>{
        const idToAdd = e.target.getAttribute("add-id")
        fetch(`/api/users/favorites/add/${idToAdd}`,{
            method:"PUT"
        }).then(res=>{
            if(res.ok){
                location.reload()
            }else{
                alert("failed")

            }
        })

    })
});
 