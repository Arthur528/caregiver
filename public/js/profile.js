const removeFavBtns = document.querySelectorAll("removeFave");


removeFavBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
        const idToRemove = e.target.getAttribute("user-id");
        fetch(`/favorites/${idToRemove}`,{
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
