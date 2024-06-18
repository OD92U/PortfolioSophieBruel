const formLoginUser = document.getElementById("formlogin");
formLoginUser.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailandpassword = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const sendemailpassword = JSON.stringify(emailandpassword);
   
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: sendemailpassword
    })
    .then((response) => response.json())
    .then((data) => {
        const error = document.getElementById("error")
        if (data.message === "user not found") {
            error.innerHTML = ""
            error.innerHTML = "<span style='color: red;'>"+"Erreur dans l’identifiant ou le mot de passe</span>"
        }
        else {
            if (data.error != undefined) {
                error.innerHTML = ""
                error.innerHTML = "<span style='color: red;'>"+"Erreur dans l’identifiant ou le mot de passe</span>"
            }
            else {
                window.sessionStorage.setItem("usertoken", data.token);
                window.location.replace("index.html");
            }
        }
    });

    
})



