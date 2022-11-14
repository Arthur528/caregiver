<<<<<<< HEAD
const removeFavBtns = document.querySelectorAll(".removeFave");


removeFavBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
        const idToRemove = e.target.getAttribute("user_id");
        fetch(`/api/users/${idToRemove}`,{
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
>>>>>>> dev
