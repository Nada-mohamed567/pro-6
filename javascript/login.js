let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign-in")

let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")


loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(username.value == "" || password.value == ""){
       Swal.fire({
          title: "Missing Data!",
          text: "Please Fill in all Fields.",
          icon: "warning"
       });
       
    }else{
        if(getUserName.trim() === username.value.trim() && getPassword === password.value){
            Swal.fire({
               title: "LOgin Successfully!",
               text: "Welcome to Fashion Store",
               icon: "success",
               showConfirmButton: false
            });

            setTimeout(() =>{
                window.location = "index.html"
            } , 1000)
   
        }else{
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Login Failed!",
              text: " Username or Password is incorrect!",
              showConfirmButton: "Try Again",
              timer: 1500
            });
        }
    }
})

show.addEventListener('click' , () =>{
    password.type = show.checked ? "text" : "password"
})

