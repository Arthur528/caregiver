const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        email:document.querySelector("#loginEmail").value,
        password:document.querySelector("#loginPassword").value
    };
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res => {
        if(res.ok){
            location.href = `/`;
        } else {
            alert("login trumpet sound")
            location.reload();
        };
    });
});