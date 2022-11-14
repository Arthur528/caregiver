const removeProfile = document.querySelectorAll("removeProfile");


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

