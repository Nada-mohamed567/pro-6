let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerBtn = document.getElementById("sign-up")

registerBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    if(username.value == "" || email.value == "" || password.value == ""){
       Swal.fire({
            title: "Missing Data!",
            text: "Please fill in all required fields.",
            icon: "warning",
            confirmButtonText: "OK"
        });


    }else{
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        Swal.fire({
          title: "Registered Successfully!",
          text: "Your account has been created successfully.",
          icon: "success",
          showConfirmButton: false
       })
   
     setTimeout(() =>{
        window.location = "login.html"

       } , 3000)
    }
})


let show = document.getElementById('show')
show.addEventListener('click' , () =>{
    password.type = show.checked ? "text" : "password"
})