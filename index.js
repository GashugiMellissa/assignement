const user = document.getElementById("user-signup");
const password= document.getElementById("password");
const email= document.getElementById("Email");
const submit= document.getElementById("submit");


const signInUser= document.getElementById("sign-in-user");
const signInPass= document.getElementById("sign-in-password");
const signInButton= document.getElementById("sign-in-button");

const formData= new FormData()

submit.addEventListener("click", ()=>{
    const data = {
        email: email.value,
        password: password.value,
        name: user.value
    }
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password)
    fetch("https://myapi-y8f8.onrender.com/api/v1/user/signup", {
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(data),
    }).then(response => response.json()).then((data=> console.log(data)))
})


signInButton.addEventListener("click", ()=>{
    const data={
        email:signInUser.value,
        password: signInPass.value
    }

    fetch("https://myapi-y8f8.onrender.com/api/v1/user/login", {
        method:"post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then((data=> {
        localStorage.setItem("token", JSON.stringify(data.response.token))
        if(data.response.role === "user"){
            window.location.href="success.html"
        }else if(data.response.role === "admin"){
            window.location.href="admin.html"
        }
    }))
})