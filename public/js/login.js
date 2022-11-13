const loginForm = document.querySelector("#login");

//TODO: BUG! we want login to redirect to homepage IF successful, but to only reload the page if not. Currently, BOTH OPTIONS LEAD TO HOME PAGE.
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        email:document.querySelector("#loginEmail").value,
        password:document.querySelector("#loginPassword").value
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res => {
        if(res.ok){
            alert("success!");
            location.href = `/`;
            // TODO: When we go to profile, we will need this instead of the redirect above.
            // return res.json();
        } else {
            alert("login trumpet sound")
            location.reload();
        };
    })

    // TODO: Right now, redirects to homepage on login. We want it to go to profile.
    // .then(data=>{
    //     location.href = `/`;
    // });
});